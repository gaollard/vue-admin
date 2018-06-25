import api from '@/api/index'

export default {
  namespace: true,
  state: {
    brands: [],
    loading: false
  },
  getters: {
    brands (state) {
      return state.brands
    }
  },
  mutations: {
    setBrands (state, data) {
      state.brands = data
    }
  },
  actions: {
    async getBrands ({ commit }, data) {
      let ret = await api.getBrands()
      let list = ret.data.brands
      commit('setBrands', list)
    }
  }
}
