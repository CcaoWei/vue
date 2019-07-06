//入口文件
import Vue from 'Vue';
import app from "./App.vue";
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icon-extra.css';
import VueRouter from 'vue-router';


import router from "./router.js"//导入路由模块

Vue.use(VueRouter);
Vue.component(Header.name, Header);

var vm = new Vue({
  el:"#app",
  render: c=>c(app),
  router//挂在router到实例上
})