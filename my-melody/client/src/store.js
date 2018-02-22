import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTrack: { title: null, artist: null },
    postModalState: null,
    postModalOpen: false
  },
  mutations: {
    selectTrack(state, track) {
      state.selectedTrack = track;
    },
    postModalState(state, dialog) {
      state.postModalState = dialog;
    }
  },
  actions: {

  },
  getters: {
    selectedTrack(state) {
      return state.selectedTrack;
    },
    postModalState(state) {
      return state.postModalState;
    }
  }
})
