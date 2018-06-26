import api from '@/api/index'

export default {
  namespace: true,
  state: {
    users: [],
    loading: false
  },
  getters: {
    users (state) {
      return state.users
    }
  },
  mutations: {
    setUsers (state, data) {
      state.users = data
    }
  },
  actions: {
    async getUsers ({ commit }, data) {
      let ret = await api.getUsers()
      let list = ret.data.list
      commit('setUsers', list)
    }
  }
}
