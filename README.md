#这是一个自己的demo 运用豆瓣电影 api
#练习 运用mintui 和 mui
#mintui是vue的一个组件
#mui 是一个类似于bootstrap 的插件库

#安装cnpm  npm install -g cnpm --registry=https://registry.npm.taobao.org

# 命令行 git 
    1. git add .   git commit -m""  git push 
    2. git  git diff 查看更改的代码
    3. git  git reset --hard 重置更改的代码
    4. git apply ~/Desktop/xiaoyan-app/flutter_sdk_modification.patch 
    5. git fetch 相当于是从远程获取最新到本地，不会自动merge

# vscode 有个工具可以 是可视化提交

# 用 mintui 写header

# mui 写 tabbar   图标 注意： 需要 拷贝 图标css ttf字体库

#  用router-view展示中间区域 路由匹配 

# tabbar 为路由 ---- 设置选中高亮 

# 设置 四个tabbar的路由页面 展示对应的路由组件 

#  轮播图 + 每一个电影列表  mint ui

# 运用vue-resource 加载数据 cnpm i vue-resource -s 安装   碰到跨域问题  可以用jsonp来获取数据  this.$http.jsonp("url")  欧呦  不用resource了 # 用axios了  那我也换掉吧

# 地址上的图片能正确显示 但是网页中不能 需要加 <meta name="referrer" content="no-referrer" />


# ！Vue项目启动出现Error:Cannot find module 'array-includes'解决方法
    1. 删掉项目中的node_modules文件夹，
    2. npm cache verify
    3. cnpm init 
    4. cnpm run dev




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

# vuex 是个啥呢 其实就是一个项目里面公共变量的存储仓库  可以理解成 小程序的app.js 里面的globalData  组件之间没有依赖关系 还想相互访问的时候 就可以通过把数据放到vuex 里面让想要用到的组件 调用 
    1. 下载vuex cnpm install vuex -S
    2. main.js 引入 vuex包   import Vuex from 'Vuex'
    3. 注册vuex 到vue中      Vue.use(Vuex)
    4. 创建一个vuex的示例 得到一个 数据仓储对象    var store = new Vuex.Store({ state:{},mutations:{} })
    5. 讲store 挂载到vue实例上

#vuex 的用法
    1. 注意  state中的数据不能直接修改  修改的话通过mutations  
    2. 组件获取state数据 是 this.$store.state.*** 数据名称
    3. 组件修改数据 需要组件调用mutations里面定义的方法  通过 this.$store.commit("方法名",参数) ！！！！此参数只能有一个 但参数类型不指定 可以是对象也可以是数组
    4. this.$state.getters.*** 获取过滤器的方法

#本地存储 更新了car 要放到本地存储中 不然会刷新时 数据清空
    1. 更新car后 把数据存储到本地的 localStorage 中   localStorage.setItem('名称',值)
    2. 重新打开网站的时候呢  去本地存储中拿到数据 赋值给vuex中的car

#注意！！！！！    父组件引入子组件中后 
    1. 导入 import 子组件名称 from "";
    2. export default { //抛出去的数据中要注册一下
            components:{
                子组件名称
            }
        }

#子组件从父组件中拿值
    1. 在父页面给子组件定义自定义指令  :名称="值"
    2. 在子组件中的export中定义props:{"名称"} 
    3. 组件上 自定义指令 直接用:value="名称"  
    
#对element ui的认识
    1. 强大             
    2. 完整          基本涵盖了日常所需要的   用了mui和mintui后发现 element ui   之后在开发会优先旋蒸elementui
    3. 动画过渡舒服  


#购物车结算  运用element ui
    1. 下载安装element ui cnpm i element-ui -S
    2. 引入elementui    import { Button } from 'element-ui'
    3. 引入elementui css import 'element-ui/lib/theme-chalk/index.css'
    4. Vue.component(Button.name, Button) / Vue.use(Button)