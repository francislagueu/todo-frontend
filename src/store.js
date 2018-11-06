import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import _ from 'lodash';

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
    list: [],
    currentName: ''
  },
  mutations: {
    setToken(state, token){
      state.token = token;
      state.isAuthenticated = !!token;
    },
    setUser(state, user){
      state.user = user;
    },
    setList(state, list){
      Vue.set(state, 'list', list);
    },
    addToList(state, list){
      state.list.push(list);
    },
    addItem(state, item){
      //state.getters.getAlist(item);
      const index = _.findIndex(state.list, (l)=>{
        return l.name == state.currentName;
      });
      state.list[index].items.push(item);
    },
    setCurrentName(state, name){
      state.currentName = name;
    }

  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setList({commit}, list){
      commit('setList', [...list]);
    },
    addToList({commit}, list){
      commit('addToList', list);
    },
    addItem({commit}, item){
      commit('addItem',item);
    },
    setCurrentName({commit}, name){
      commit('setCurrentName', name);
    }
  },
  getters: {
    getAlist: (state) => (name) => {
      return state.list.find(list => list.name==name);
    },

  }
});
