import VueRouter from 'vue-router'
//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import HotContainer from './components/tabbar/HotContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


var router = new VueRouter({
  routes: [//配置路由规则
    { path: '/home', component: HomeContainer},
    { path: '/hot', component: HotContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的高亮的累
})

// 把路由对象暴露出去
export default router