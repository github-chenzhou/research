import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/research/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/research/personal.vue')
    },
    {
      path: '/approval',
      name: 'approval',
      component: () => import('@/components/research/approval.vue')
    },
  ]
})
