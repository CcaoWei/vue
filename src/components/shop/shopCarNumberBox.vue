<template>
    <div>
       <div class="mui-numbox shop-car-number-box" data-numbox-min='1' data-numbox-max='30'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="intcount" readonly @change="numChanged" ref="count"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted(){
        mui('.mui-numbox').numbox()
    },
    methods:{
        numChanged(){//每当文本框被修改 就把数据 同步给父组件  通过事件调用传递给父组件
           
            // this.$emit("goodCount",parseInt(this.$refs.count.value));
            this.$store.commit("updateShopCarCount",{id:this.goodsId,count:this.$refs.count.value})
            
        }
    },
    props:["intcount","goodsId"],
}
</script>
<style scoped>
    .shop-car-number-box{
        height: 25px;
        width: 115px;
        margin: 0 5px;
    }
</style>
