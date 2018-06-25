import Vue from 'vue'
import Vuex from 'vuex'
import brand from './module/brand'
import category from './module/category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  modules: {
    brand,
    category
  }
})
