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

  },
  getters: {
    mobile: state => state.mobile,
    user: state => state.user,
    role: state => state.role,
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
  },
  actions: {
  	saveUserInfo: ({commit}, data) => {
      commit('setUser', data.user)
    },
  }
})
