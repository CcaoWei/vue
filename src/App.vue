<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="电影列表"></mt-header>
    <!-- 路由 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label" >购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  overflow: hidden;
}
.v-enter{
  opacity: 0;
  transform:translateX(100%);
} 
.v-leave{
  opacity: 0;
  transform:translateX(-100%);
  position: absolute;
} 
.v-enter-active,.v-leave-active{
  transition: all .5s ease;
}
</style>

