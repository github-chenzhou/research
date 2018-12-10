<template>
  <div id="app">
    <!-- 导航 -->
    <nav-cmp :user="user"></nav-cmp>
    <router-view />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import navCmp from '@/components/common/nav.vue'
  import request from '@/utils/request.js'
  import api from '@/utils/api.js'
  import { isSupported } from '@/utils/util.js'
  
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
    computed: {
      ...mapGetters([
        'mobile',
        'user'
      ])
    },
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
          let url = api.GET_USER_INFO;
          let params = { code };

          if(this.mobile) {
            this.login(this.mobile);
            
            return this;
          }

          request.get(url, params).
          then((res)=>{
            this.login(res.mobile);

            this.$store.commit('setMobile', res.mobile);

            let key = 'login-mobile';
            if(isSupported(window.localStorage)) {
              res.mobile && localStorage.setItem(key, res.mobile);
            }

          })
        } else {
          // let phone = 13721441400;
          let phone = 18301598160;
          this.login(phone);
        }
      },

      /*
       * @method 登陆
       * @param phone
       */
      login(phone) {
        if(phone) {
          let url = api.LOGIN;
          let params = { phoneNum: phone, actionType: 'login' };

          request.get(url, params).
          then((res)=>{
            this.$store.commit('setUser', res);

            // 设置当前角色
            if(res.groups) {
              let ids = res.groups.split(',');
              this.$store.commit('setRole', ids[0]);
            }
          })
        }
      },

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
