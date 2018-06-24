import api from '@/api/index'

export default {
  state: {
    brands: []
  },
  getters: {
    brands () {
      return []
    }
  },
  mutations: {
    SET_BRANDS (state, data) {
      state.brands = data
    }
  },
  actions: {
    async GET_BRANDS ({ commit }, data) {
      let ret = await api.getBrands()
      let list = ret.data.data.brands
      commit('SET_BRANDS', list)
    }
  }
}
