import VueRouter from 'vue-router'
//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import HomeItemDetails from './components/pages/HomeItemDetails.vue'


var router = new VueRouter({
  routes: [//配置路由规则
    { path: '/', redirect: "/home"},
    { path: '/home', component: HomeContainer},
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/details/:id', component: HomeItemDetails }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的高亮的累
})

// 把路由对象暴露出去
export default router