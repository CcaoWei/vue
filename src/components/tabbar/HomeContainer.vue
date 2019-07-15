<template>
    <div>
        <!-- 轮播图 + 每一个电影列表 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipperList" :key="item.id">
              <img :src="item.images.small" alt="">  
            </mt-swipe-item>
        </mt-swipe>
        
        <ul class="mui-table-view mui-grid-view mui-grid-9" >
            <router-link :to="'/home/details/'+movieItem.id" v-for="movieItem in movieList" class="movie-li" :key="movieItem.id">
                <a href="" class="movie"> 
                    <img class="movie-img" :src="movieItem.images.small" alt="">  
                </a>
                <div class="movie-title">名称：{{movieItem.title}}</div>
                <div class="movie-cast"> <span>主演：</span><span v-for="cast in movieItem.casts" :key="cast.id">{{cast.name}} </span></div>
                <div class="movie-introduce"><span>类型：</span><span v-for="genre in movieItem.genres" :key="genre.id">{{genre}} </span></div>
            </router-link>
            
        </ul> 

    </div>
</template>
<script>
export default {
    data(){
        return{
            swipperList:[],//轮播图数组
            movieList:[]
        };
    },
    created(){
       this.getSwipperData();
       this.getMovieListData()
    },
    methods:{
        getSwipperData(){
            this.$http.jsonp("http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=5").then(result =>{
                console.log(result);
                 if(result.status == 200){
                     this.swipperList = result.body.subjects;
                 }else{
                     alert("轮播图显示失败 ")
                 }
            })
        },
        getMovieListData(){
             this.$http.jsonp("http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=200").then(result =>{
                console.log(result);
                 if(result.status == 200){
                     this.movieList = result.body.subjects;
                 }else{
                     alert("轮播图显示失败 ")
                 }
            })  
        }
    }
}
</script>
<style scoped>
  .mint-swipe{
      height: 150px;
  }
  .mint-swipe img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .movie-li{
      height: 220px;
      width: 49%;
      float: left;
      background: #fff;
      padding: 3px;
      margin-right: 1px;
      margin-bottom: 5px;
      border: 1px solid gainsboro;
  }
  .movie-li:nth-of-type(odd){
      margin-right: 5px;
  }
  .movie-img{
    display: block;
    height: 133px;
    width: 100%;
    margin-bottom: 8px;
  }
  .movie-title{
    font-size: 13px;
    line-height: 18px;
    color: black;
    opacity: 0.7;
    margin-top: 3px;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .movie-cast{
      width: 100%;
      display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .movie-cast,.movie-cast span{
      margin-right: 2px;
      font-size: 12px;
      line-height: 15px;
      color: black;
      opacity: 0.6;
      margin-top: 5px;
  }
  .movie-introduce{
    font-size: 12px;
    line-height: 16px;
    color: black;
    opacity: 0.3;
    margin-top: 3px;
  }
</style>
