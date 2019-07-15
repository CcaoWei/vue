<template>
    <div>
       <div class="mui-numbox" data-numbox-min='1' data-numbox-max='30'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="numChanged" ref="count"/>
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
            this.$emit("getCount",parseInt(this.$refs.count.value));
        }
    }
}
</script>
<style scoped>

</style>
