import api from '@/api/index'

export default {
  namespace: true,
  state: {
    categorys: [],
    loading: false
  },
  mutations: {
    setCategorys (state, data) {
      state.categorys = data
    }
  },
  actions: {
    async getCategorys ({ commit }, data) {
      let ret = await api.getCategorys()
      let list = ret.data.categorys
      list.forEach(item => {
        item.updateTime = item.createTime = '2018-06-07T14:54:37.880Z'
      })
      commit('setCategorys', list)
    }
  }
}
