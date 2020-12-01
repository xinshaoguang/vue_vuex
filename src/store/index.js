import { createStore } from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getter from './getter'

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
  getter
})
