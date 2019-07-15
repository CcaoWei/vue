#这是一个自己的demo 运用豆瓣电影 api
#练习 运用mintui 和 mui
#mintui是vue的一个组件
#mui 是一个类似于bootstrap 的插件库

#安装cnpm  npm install -g cnpm --registry=https://registry.npm.taobao.org

# 命令行 上传 
# git add .   git commit -m""  git push 
#git  git diff 查看更改的代码
#git  git reset --hard 重置更改的代码
#git apply ~/Desktop/xiaoyan-app/flutter_sdk_modification.patch 

# vscode 有个工具可以 是可视化提交

# 用 mintui 写header

# mui 写 tabbar   图标 注意：  拷贝 图标css ttf字体库

#  用router-view展示中间区域 路由匹配


# tabbar 为路由 ---- 设置选中高亮 

#设置 四个tabbar的路由页面 展示对应的路由组件 

#  轮播图 + 每一个电影列表  mint ui

# 运用vue-resource 加载数据 cnpm i vue-resource -s 安装   碰到跨域问题  可以用jsonp来获取数据  this.$http.jsonp("url")  欧呦  不用resource了 # 用axios了  那我也换掉吧

# 地址上的图片能正确显示 但是网页中不能 需要加 <meta name="referrer" content="no-referrer" />


# ！Vue项目启动出现Error:Cannot find module 'array-includes'解决方法
# ！1 删掉项目中的node_modules文件夹，
# ！2 npm cache verify
# ！3 cnpm init 
# ！4 cnpm run dev




#  详情页  其实还可以增加一个写评论的功能  接口有限 暂时先这样吧 主要增加了 home页面的二级页面 
    1.创建detail组件
    2.将组件注册到router.js中
    3.在homecontainer中引用 detail组件
    4.书写detail结构
    5.获取detail数据 并放到detailmsg中
    6.渲染数据
    7.修改样式
    8.搞定



# 添加了购买的功能   主要用到
    1. 详情页添加新的小组件    购买数量  用到了mui的number box 小部件  
    2. 父子组件之间传值  子组件传值给父组件通过事件调用传递给父组件
    3. 动画  加入购物车有个动画的功能  动态获取位置 obiect.getBoundingClientRect()方法