<template>
    <div class="detail">
        <p class="detail-title">{{movieDetail.title}}</p>
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
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="detail-summary"><p class="summary-title">介绍：{{movieDetail.summary}}</p></div>
        
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
</style>
<script>
export default {
    // https://api.douban.com/v2/movie/subject/
    data(){
        return{
            movieDetail:null,
        };
    },
    created(){
       this.getMovieDetail();
    },
    methods:{
        getMovieDetail(){
            this.$http.jsonp("https://douban.uieee.com/v2/movie/subject/"+this.$route.params.id).then(result =>{
                 if(result.status == 200){
                     this.movieDetail = result.body;
                 }else{
                     alert("获取详情失败")
                 }
            });   
        }
    }
}
</script>
