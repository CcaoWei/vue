//入口文件
import Vue from 'Vue';
import app from "./App.vue";
import { Header, Swipe, SwipeItem, Switch} from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icon-extra.css';
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router';
import  VueResource from 'vue-resource';
import router from "./router.js";//导入路由模块
import Vuex from "vuex";
import { Button } from 'element-ui'

Vue.use(VueRouter); 
Vue.use(VueResource);
Vue.use(Vuex);

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

var localCar = JSON.parse(localStorage.getItem("car") || '[]');

var store = new Vuex.Store({
  state:{//注意  state中的数据不能直接修改  修改的话通过mutations  
        //组件获取state数据 是 this.$store.state.*** 数据名称
        //组件修改数据 需要组件调用mutations里面定义的方法  通过 this.$store.commit("方法名",参数) ！！！！此参数只能有一个 但参数类型不指定 可以是对象也可以是数组
    car: localCar,//购物车数据{id count price selected}
  },
  mutations:{
    addToCar(state,goodsInfo){
      console.log(`addToCar------${goodsInfo}`)
      console.log(goodsInfo)
      //判断是否有该条数据
      var flag = false;
      state.car.some(item =>{
        if(item.id == goodsInfo.id){
          item.count += parseInt(goodsInfo.count);
          flag = true;
          return true;
        }
        
      });
      console.log(state.car)
      if(!flag)
        state.car.push(goodsInfo);
      // 更新了car 要放到本地存储中 不然会刷新时 数据清空
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateShopCarCount(state, goodsInfo){
      state.car.some(item => {
        if (item.id == goodsInfo.id){
          item.count = goodsInfo.count;
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    deleteCar(state,id){
      state.car.some((item,i)=>{
        if (item.id == id){
          state.car.splice(i,1);
          return true;
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateGoodsSelect(state,goodsInfo){
      state.car.some(item => {
        if (item.id == goodsInfo.id) {
          item.selected = goodsInfo.selected;
          return true;
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    
  },
  getters:{ //this.$state.getters.***
     getAllCount(state){
        var allCount = 0;
        state.car.forEach(item =>{
          allCount += parseInt(item.count);
        })
      console.log(allCount)
      return allCount;
     },
    getSelectedCount(state) {
      var selectedCount = 0;
      state.car.forEach(item => {
        if (item.selected) {
          selectedCount += parseInt(item.count);
        }
      });
      return selectedCount;
    },
    getSelectedPrice(state) {
      var selectedPrice = 0;
      state.car.forEach(item => {
        if (item.selected) {
          selectedPrice += parseInt(item.price*item.count);
        }
      });
      return selectedPrice;
    }
  }
})

var vm = new Vue({
  el:"#app",
  render: c=>c(app),
  router,//挂载router到实例上
  store,//将vuex 挂载到实例上
})