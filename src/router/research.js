import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/research/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  // base: process.env.BASE_URL,
  base: '/research',
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
      path: '/roles',
      name: 'roles',
      component: () => import('@/components/research/roles.vue')
    },
    {
      path: '/project/:type/:id',
      name: 'project',
      component: () => import('@/components/research/project.vue')
    },
    {
      path: '/approval',
      name: 'approval',
      component: () => import('@/components/research/approval.vue')
    },{
      path: '/approvaldetail//:module/:id',
      name: 'approvaldetail',
      component: () => import('@/components/research/approval-detail.vue')
    },
  ]
})
