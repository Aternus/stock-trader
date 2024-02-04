import { Module } from "vuex";

import state from "./state.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const moduleName = "account";

/** @type {Module} */
const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default module;

export { moduleName };
