import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins:[
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setToken(state, token){
      state.token = token;
      state.isAuthenticated = !!token;
    },
    setUser(state, user){
      state.user = user;
    }

  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  getters: {
    getUser: state => state.user
  }
});
