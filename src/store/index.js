import Vue from 'vue'
import Vuex from 'vuex'
import brand from './module/brand'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    count () {
      return 1
    }
  },
  mutations: {
    SET_COUNT (state, data) {
      state.count = data
    }
  },
  actions: {
    GET_COUNT ({ commit }, data) {
      commit('SET_COUNT', data)
    }
  },
  modules: {
    brand
  }
})
