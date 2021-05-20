import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './action'
// eve-ui某些功能需要引入的
import modules from 'eve-ui/src/store/modules'
// 自动引入当前工程的所有module
import autoScanModules from './lib/autoScanModules'
Vue.use(Vuex)
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {
    ...modules,
    ...autoScanModules
  }
})
