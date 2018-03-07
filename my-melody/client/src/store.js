import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// REMEMBER TO TURN THIS OFF
// WHEN PUSHING TO PRODUCTION
const devMode = true;

// DEFAULT TEST USER
const testUsername = "default";
const testPassword = "user";

export default new Vuex.Store({
    state: {
        spotifyToken: null,
        selectedTrack: { title: null, artist: null },
        postModalState: null,
        postModalOpen: false,
        currentUser: devMode ? testUsername : null,
        baseApiUrl: 'http://localhost:8888',
        posts: [],
        loggedIn: devMode
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
            state.currentUser = user;
        },
        setLoggedIn(state, loggedIn) {
            state.loggedIn = loggedIn;
        }
    },
    actions: {
        getPosts(context, username) {
            return axios.get(`${context.getters.baseApiUrl}/api/posts/${username}`)
            .then(res => {
                context.commit('setPosts', res.data);
            })
            .catch(err => console.error(err));
        },
        addUser(context, data) {
            return axios.post(`${context.getters.baseApiUrl}/api/auth/signup`, {
                firstName: data[0],
                lastName: data[1],
                username: data[2],
                password: data[3]
            })
            .then(res => {
                if (!res.request.response.includes('E11000')) {
                    context.commit('setUser', res.data);
                    context.commit('setLoggedIn', true);
                }
            })
            .catch(err => console.error(err));
        },
        getUser(context, data) {
            var uname = devMode ? testUsername : data[0];
            var pword = devMode ? testPassword : data[1];
            return axios.post(`${context.getters.baseApiUrl}/api/auth/login`,
                {
                    username: uname,
                    password: pword,
                })
                .then(res => {
                    context.commit('setUser', res.data.username);
                    context.commit('setLoggedIn', true);
                    return res.data;
                })
                .catch(err => console.error(err));
        },
        editUser(context, data) {
            return axios.put(`${context.getters.baseApiUrl}/api/users/${data.username}`, data)
            .then(res => {
                return res.data;
            })
            .catch(err => console.error(err));
        },
        logout(context, username) {
            context.commit('setLoggedIn', false);
        },
        editFollowers(context, data) {
            return axios.put(`${context.getters.baseApiUrl}/api/users/${data.username}`,
                {
                    following: data,
                    followers: data
                })
                .then(res => {
                    return res.data;
                })
                .catch(err => console.error(err));
        },
        searchUsers(context, data) {
            return axios.get(`${context.getters.baseApiUrl}/api/users/search/${data}`)
            .then(res => {
                return res.data;
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
});
