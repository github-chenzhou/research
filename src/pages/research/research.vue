<template>
  <div id="app">
    <!-- 导航 -->
    <nav-cmp></nav-cmp>
    <router-view />
  </div>
</template>

<script>
 import navCmp from '@/components/common/nav.vue'
  
  export default {
    name: 'research-page',
    components: {
      navCmp
    },
  }
</script>

<style>
  @import "~@/style/base.css";
  @import "~@/style/iconfont/iconfont.css";

  #app {
    width: 100%;
    height: 100%;

    text-align: center;
  }

  html * {
    box-sizing: border-box;
    text-size-adjust: 100%;
    -webkit-touch-callout: none;
    /* -webkit-user-select: none; */
  }
</style>
