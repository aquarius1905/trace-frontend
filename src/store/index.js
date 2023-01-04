import { createStore } from 'vuex'

export default createStore({
  state: {
    accessToken: null,
    loggedInUser: null
  },
  getters: {
    getCareManagerAccessToken(state) {
      return state.accessToken;
    },
    isLoggedIn(state) {
      return state.accessToken !== null
    }
  },
  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setLoggedInUserData(state, payload) {
      state.loggedInUser = payload;
    }
  },
  actions: {
    setAccessToken(context, payload) {
      context.commit('setAccessToken', payload);
    },
    setLoggedInUserData(context, payload) {
      context.commit('setLoggedInUserData', payload);
    }
  },
  modules: {
  }
})
