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
    baseApiUrl: 'https://mymelody.herokuapp.com',
    posts: [],
    user: '',
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
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    getPosts(context) {
      console.log(context);
      return axios.get(`/api/posts/${context.getters.currentUser}`)
        .then(res => {
          context.commit('setPosts', res.data);
        })
        .catch(err => console.error(err));
    },
    addUser(context, data) {
      console.log(context);
      console.log(data);
      return axios.post(`/api/users/`, {
          firstName: data[0],
          lastName: data[1],
          username: data[2],
          password: data[3]
        })
        .then(res => {
          console.log(res);
         context.commit('setUser', res.data);
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
