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
    baseApiUrl: 'http://localhost:8888',
    posts: [],
    user: '',
    loggedIn: false
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
      state.loggedIn = true;
    }
  },
  actions: {
    getPosts(context) {
      console.log(context);
      return axios.get(`${context.getters.baseApiUrl}/api/posts/${context.getters.currentUser}`)
        .then(res => {
          context.commit('setPosts', res.data);
        })
        .catch(err => console.error(err));
    },
    addUser(context, data) {
      return axios.post(`${context.getters.baseApiUrl}/api/users/`, {
          firstName: data[0],
          lastName: data[1],
          username: data[2],
          password: data[3]
        })
        .then(res => {
         context.commit('setUser', res.data);
       })
        .catch(err => console.error(err));
    },
    getUser(context, data) {
      console.log(data);
      return axios.get(`${context.getters.baseApiUrl}/api/users/${data.username}`)
        .then(res => {
          if (res.data.password === data.password) {
            context.commit('setUser', res.data);
            return res.data.username;
          } else {
            return null;
          }
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
    },
    loggedIn(state) {
      return state.loggedIn;
    }
  }
})
