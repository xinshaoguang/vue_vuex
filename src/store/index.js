import {
  createStore
} from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default createStore({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  state,
  mutations,
  actions,
  getters
})