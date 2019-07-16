<template>
    <div class="detail" v-if="movieDetail">
        <p class="detail-title">{{movieDetail.name}}</p>
        <div class="detail-top">
            <img :src="movieDetail.images.medium" class="detail-top-left">
            <div class="detail-top-right">
                <div class="tags">
                    <p class="tag-title">类型：</p>
                    <ul class="detail-tags">
                        <li class="detail-tag" v-for="tag in movieDetail.tags" :key="tag">{{tag}} </li>
                    </ul>
                </div>
            
                <div class="tags cast">
                    <p class="tag-title">主演：</p>
                    <ul class="detail-tags">
                        <li class="detail-tag" v-for="cast in movieDetail.casts" :key="cast.name">{{cast.name}} </li>
                    </ul>90
                </div>
            </div>
            
        </div>
        <div class="detail-summary"><p class="summary-title">介绍：{{movieDetail.summary}}</p></div>

        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="moive-price">价格: <span>￥{{movieDetail.wish_count}}</span> </div>
        <div class="shop-content">
            <p>购买数量：</p> <number-box @getCount="getSelectedCount"></number-box>
        </div>
        <div class="addShopCar" @click="addShopCart">加入购物车</div>
        <div class="detail-evaluation">评价：</div>
        <ul>
             <li class="detail-evaluation-content" v-for="reviews in movieDetail.popular_reviews" :key="reviews.summary">{{reviews.summary}}</li>
        </ul>
    </div>
</template>
<style scoped>
div,p,img,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
.detail{
    padding: 0 5px 100px;
    background: #fff;
    
}
.detail-title{
    font-size: 20px;
    color: black;
    opacity: 0.7;
    padding: 18px 0;
}
.detail-top{
    height: 150px;
}
.detail-top-left{
    width: 110px;
    height: 150px;
    display: block;
    float: left;
}
.detail-top-right{
    width: 215px;
    display: block;
    float: left;
    margin-left: 8px;
}
.tags{
    padding: 0;
    float: left;
}
.detail-tags{
    padding: 0;
    float: left;
    opacity: 0.7;
    width: 165px;
    margin: 0;
}
.tag-title{
    float: left;
    width: 42px;
    opacity: 0.7;
}
.detail-tag{
    line-height: 22px;
    font-size: 14px;
    display: inline; 
    list-style: none;
}
.detail-summary{
    margin-top: 20px;   
}
.summary-title{
    color: black;
    opacity: 0.8;
}
.detail-evaluation{
    color: black;
    opacity: 0.8;
    font-size: 14px;
    margin-top: 20px;
    line-height: 27px;
    background: rgb(167, 221, 243);
    padding-left: 2px;
}
.detail-evaluation-content{
    height: 100px;
    border-bottom: 1px solid #eee;
    padding: 10px;
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
}
.detail-evaluation-content:last-child{
    border-bottom: 0;
}
.shop-content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
}
.ball{
    height: 15px;
    width: 15px;
    background: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 466px;
    left: 129px;
}
.addShopCar{
    height: 30px;
    width: 111px;
    /* padding: 10px; */
    line-height: 30px;
    font-size: 16px;
    color: #fff;
    background:  #d66666;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px;
}
.moive-price{
    margin: 8px 0;
    color: darkgray;
    font-size: 14px;
}
.moive-price span{
    color: red;
}
</style>
<script>
// 导入数字选择框
import numberBox from "../shop/numberBox.vue"
export default {
    // https://api.douban.com/v2/movie/subject/
    // "https://douban.uieee.com/v2/movie/subject/
    data(){
        return{
            movieDetail:null,
            ballFlag:false,//控制小球
            selectedCount:1,
        };
    },
    created(){
       this.getMovieDetail();
    },
    methods:{
        getMovieDetail(){
            this.$http.jsonp("https://douban.uieee.com/v2/movie/subject/"+this.$route.params.id).then(result =>{
                 if(result.status == 200){
                     console.log(result)
                     this.movieDetail = result.body;
                 }else{
                     alert("获取详情失败")
                 }
            });   
        },
        addShopCart(){
           this.ballFlag = !this.ballFlag;
           console.log(this.movieDetail)
           var goodsInfo = {id:this.movieDetail.id,count:this.selectedCount,price: this.movieDetail.wish_count,selected:true};
           
           this.$store.commit("addToCar",goodsInfo);
           console.log(this.$store.state.car)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            //用到 object.getBoundingClientRect();  获取坐标
            const ballPositon =  this.$refs.ball.getBoundingClientRect();
            const badgePositon = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePositon.left - ballPositon.left;
            const yDist = badgePositon.top - ballPositon.top;
            console.log(ballPositon)
            console.log(badgePositon)
             el.offsetWidth;
             el.style.transform = "translate("+ xDist +"px,"+ yDist+"px)";
             el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
             done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){//用来接收子组件传过来的值得
            this.selectedCount = count;
            console.log(this.selectedCount)
        }
    },
    components:{
        numberBox
    }
}
</script>
