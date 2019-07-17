<template>
    <div class="shop-car">
        <div class="goods-list">
            <div class="mui-card" v-for="(goodItem,i) in carList" :key="goodItem.id">
                <div class="mui-card-content">
                    <mt-switch @change="selectChanged(goodItem.id,goodItem.selected)" v-model="goodItem.selected"></mt-switch>
                    <img :src="goodItem.img" class="item-img" alt="">
                    <div class="item-right">
                        <div class="item-name">{{goodItem.name}}</div>
                        <div class="item-price-delete">
                            <div class="item-price">￥{{goodItem.price}}</div>
                            <shopCarNumberBox @goodCount="getSelectedCount" :intcount="goodItem.count" :goodsId = "goodItem.id"></shopCarNumberBox>
                            <div class="item-delete" @click="deleteGoods(goodItem.id,i)" >删除</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="goods-settlement">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner settlement">
                        <div class="total">
                            <div class="total-of">总计(不含运费)</div>
                            <div class="total-price">已勾选商品 <span class="red-color">{{$store.getters.getSelectedCount}}</span> 件，总价：<span class="red-color">￥{{$store.getters.getSelectedPrice}}</span></div>
                        </div>
                        <el-button type="danger" plain>去结算</el-button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import shopCarNumberBox from "../shop/shopCarNumberBox.vue"
export default {
    data(){
        return {
            carList:[],
        };
    },
    created(){
        this.getGoodList()
    },
    methods:{
        getGoodList(){
          this.carList =  this.$store.state.car;  
        },
         getSelectedCount(count){//用来接收子组件传过来的值得
            this.selectedCount = count;
        },
        deleteGoods(id,index){
            //id删除store中的数据 index删除carList中的数据
            this.carList.splice(index,1);
            this.$store.commit("deleteCar",id)
        },
        selectChanged(id,selected){
             this.$store.commit("updateGoodsSelect",{id:id,selected:selected})
        }
        
    },
    components:{
        shopCarNumberBox
    }
}
</script>
<style scoped>
    .shop-car{
        background: #eee;
    }
    .mui-card-content{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
    }
    .item-img{
        height: 80px;
        width: 58px;
        margin: 5px 0;
    }
    .item-name{
        padding: 0 12px;
    }
    .item-right{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
    }
    .item-price-delete{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0 12px;
    }
    .item-price{
        color: red;
        opacity: 0.7;
    }
    .item-delete{
        color: blue;
        opacity: 0.5;
    }
    .mui-input-row{
        height: 30px;
    }
    .red-color{
        color: red;
    }
    .settlement{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 15px;
        width: 100%;
    }
    .total{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
