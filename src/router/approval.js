import Vue from 'vue'
import Router from 'vue-router'
import Approval from '@/components/research/approval.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  // base: process.env.BASE_URL,
  base: '/approval',
  routes: [
    {
      path: '/',
      name: 'approval',
      component: Approval
    },{
      path: '/approvaldetail/:id',
      name: 'approvaldetail',
      component: () => import('@/components/research/approval-detail.vue')
    },
  ]
})
