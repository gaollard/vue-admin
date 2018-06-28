import api from '@/api/index'

export default {
  namespace: true,
  state: {
    posts: [],
    loading: false,
    post: {}
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data
    },
    setPostItem (state, data) {
      state.post = data
    }
  },
  actions: {
    async getPosts ({ commit }, payload) {
      let ret = await api.getPosts()
      let list = ret.data.list
      commit('setPosts', list)
    },
    async getPostItem ({ commit }, payload) {
      console.log(payload)
      let ret = await api.getPostItem({
        postId: payload.postId
      })
      let data = ret.data
      commit('setPostItem', data)
    }
  }
}
