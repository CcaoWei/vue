//入口文件
import Vue from 'Vue';
import app from "./App.vue";
import { Header ,Swipe, SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icon-extra.css';
import VueRouter from 'vue-router';
import  VueResource from 'vue-resource';



import router from "./router.js"//导入路由模块

Vue.use(VueRouter); 
Vue.use(VueResource);

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
  el:"#app",
  render: c=>c(app),
  router//挂在router到实例上
})