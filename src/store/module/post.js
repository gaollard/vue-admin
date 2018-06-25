import api from '@/api/index'

export default {
  namespace: true,
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data
    }
  },
  actions: {
    async getPosts ({ commit }, data) {
      let ret = await api.getPosts()
      let list = ret.data.list
      commit('setPosts', list)
    }
  }
}
