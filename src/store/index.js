import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production", // @see https://vuex.vuejs.org/guide/strict.html
  state: {},
  mutations: {},
  actions: {},
  modules,
});
