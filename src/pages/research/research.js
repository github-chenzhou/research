// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './research.vue'
import router from '@/router/research'
import store from './store'

import '@/registerServiceWorker'

// 引入订阅发布解决路由子组件和父组件通信问题
// import('pubsub-js').then(res => {
//   window.PubSub = res
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
