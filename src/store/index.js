import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    accessToken: null,
    loggedInUser: null
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    },
    isLoggedIn(state) {
      return state.accessToken !== null
    },
    getLoggedInUserName(state) {
      return state.loggedInUser === null ? null : state.loggedInUser.name;
    }
  },
  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setLoggedInUserData(state, payload) {
      state.loggedInUser = payload;
    },
    resetUserData(state) {
      state.accessToken = null;
      state.loggedInUser = null;
    }
  },
  actions: {
    setAccessToken(context, payload) {
      context.commit('setAccessToken', payload);
    },
    setLoggedInUserData(context, payload) {
      context.commit('setLoggedInUserData', payload);
    },
    resetUserData(context) {
      context.commit('resetUserData');
    }
  },
  modules: {
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]
})
