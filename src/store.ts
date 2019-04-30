import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Vuex is a state management pattern + library for Vue.js applications.

export default new Vuex.Store({
  state: {
    myResult : '', // Allows us to create requests for detail page. Pass the data between Home vue and Detail page vue.
  },
  mutations: {
    change(state, myResult) { // change function so we can update this
                              // value wherever we want in the app just by using this function
      state.myResult = myResult;
    },
  },
  getters: {
    myResult: (state) => state.myResult, // Function getter to get the myResult variable everywhere in the app.
  },
  actions: {
  },
});
