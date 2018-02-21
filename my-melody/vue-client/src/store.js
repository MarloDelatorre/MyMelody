import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTrack: { title: null, artist: null }
  },
  mutations: {
    selectTrack(state, track) {
      state.selectedTrack = track;
    }
  },
  actions: {

  },
  getters: {
    selectedTrack(state) {
      return state.selectedTrack;
    }
  }
})
