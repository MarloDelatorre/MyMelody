import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spotifyToken: null,
    selectedTrack: { title: null, artist: null },
    postModalState: null,
    postModalOpen: false,
    currentUser: 'avempaty',
    baseApiUrl: 'https://mymelody.herokuapp.com/api',
    posts: []
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
    },
    setPosts(state, posts) {
      state.posts = posts; 
    }
  },
  actions: {
    getPosts(context) {
      return axios.get(`${context.getters.currentUser}/posts/${context.getters.currentUser}`)
        .then(res => {
          context.commit('setPosts', res.data);
        })
        .catch(err => console.error(err));
    }
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
    },
    currentUser(state) {
      return state.currentUser;
    },
    posts(state) {
      return state.posts;
    },
    baseApiUrl(state) {
      return state.baseApiUrl;
    }
  }
})
