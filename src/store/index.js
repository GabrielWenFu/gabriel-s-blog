import Vuex from 'vuex'
import Vue from 'vue'
import Storage from 'common/storage'
Vue.use(Vuex)

const STORAGE_KEY = '_gabriel_settings_routerstatus'

export const SETTINGS_ROUTERSTATUS = 'SETTINGS_ROUTERSTATUS'

export default new Vuex.Store({
  state: Storage.session.get(STORAGE_KEY, {}),
  mutations: {
    [SETTINGS_ROUTERSTATUS] (state, status) {
      Storage.session.set(STORAGE_KEY, status)
      Object.assign(state, {STORAGE_KEY: status})
    }
  },
  actions: {
    [SETTINGS_ROUTERSTATUS] ({ commit }, status) {
      commit(SETTINGS_ROUTERSTATUS, status)
    }
  }
})
