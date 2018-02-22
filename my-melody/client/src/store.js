import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spotifyToken: null,
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
    },
    spotifyToken(state, token) {
      state.spotifyToken = token;  
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
    },
    spotifyToken(state) {
      return state.spotifyToken;
    }
  }
})
