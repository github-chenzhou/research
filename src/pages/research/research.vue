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
    data() {
      return {
        index: 0
      };
    },
    computed: {},
    watch: {},
    filters: {},
    mixins: [],
    methods: {
      /*
       * @method 权限验证
       * @param code
       */
      checkAuth(code) {
        if(code) {

        }
      }
    },
    created() {
      let code = this.$route.query.code;
      this.checkAuth(code);
    },
    mounted() {
    },
    beforeDestroy() {}
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
