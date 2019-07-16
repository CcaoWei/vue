//入口文件
import Vue from 'Vue';
import app from "./App.vue";
import { Header ,Swipe, SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icon-extra.css';

import VueRouter from 'vue-router';
import  VueResource from 'vue-resource';
import router from "./router.js";//导入路由模块
import Vuex from "vuex";

Vue.use(VueRouter); 
Vue.use(VueResource);
Vue.use(Vuex);

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var store = new Vuex.Store({
  state:{//注意  state中的数据不能直接修改  修改的话通过mutations  
        //组件获取state数据 是 this.$store.state.*** 数据名称
        //组件修改数据 需要组件调用mutations里面定义的方法  通过 this.$store.commit("方法名",参数) ！！！！此参数只能有一个 但参数类型不指定 可以是对象也可以是数组
      car:[],//购物车数据{id count price selected}
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
      
    },
  },
  getters:{ //this.$state.getters.***
     getAllCount(state){
        var allCount = 0;
        state.car.forEach(item =>{
          allCount += item.count;
        })
      return allCount;
     }
  }
})

var vm = new Vue({
  el:"#app",
  render: c=>c(app),
  router,//挂载router到实例上
  store,//将vuex 挂载到实例上
})