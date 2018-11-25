import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  	// 用户手机号
  	mobile: '',
  	// 用户信息
  	user: null,
  	// 用户角色
  	role: null,
    // 我的项目列表
    projects: [],
    // 我的成果列表
    achievements: [],
    // 审批列表
    approvals: [],
    approvalID: '',
  },
  getters: {
    mobile: state => state.mobile,
    user: state => state.user,
    role: state => state.role,
    projects: state => state.projects,
    achievements: state => state.achievements,
    approvals: state => state.approvals,
    approvalID: state => state.approvalID,
  },
  mutations: {
  	setMobile (state, mobile) {
      state.mobile = mobile
    },
    setUser (state, user) {
      state.user = user
    },
    setRole (state, role) {
      state.role = role
    },
    setProjects (state, projects) {
      state.projects = projects
    },
    setAchievements (state, achievements) {
      state.achievements = achievements
    },
    setApprovals (state, approvals) {
      state.approvals = approvals
    },
    setApprovalID (state, approvalID) {
      state.approvalID = approvalID
    },
  },
  actions: {
  	saveUserInfo: ({commit}, data) => {
      commit('setUser', data.user)
    },
  }
})
