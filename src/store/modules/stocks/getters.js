import { STATE_KEYS } from "./state.js";

export const STOCKS_GETTERS = {
  GET_SEARCH_QUERY: "getSearchQuery",
  GET_SEARCH_RESULTS: "getSearchResults",
  IS_SEARCHING: "isSearching",
  IS_ERROR: "isError",
  GET_ERROR: "getError",
};

export default {
  [STOCKS_GETTERS.GET_SEARCH_QUERY](state, getters, rootState, rootGetters) {
    return state[STATE_KEYS.SEARCH_QUERY];
  },
  [STOCKS_GETTERS.GET_SEARCH_RESULTS](state, getters, rootState, rootGetters) {
    return state[STATE_KEYS.SEARCH_RESULTS];
  },
  [STOCKS_GETTERS.IS_SEARCHING](state, getters, rootState, rootGetters) {
    return state[STATE_KEYS.IS_SEARCHING];
  },
  [STOCKS_GETTERS.IS_ERROR](state, getters, rootState, rootGetters) {
    return state[STATE_KEYS.IS_ERROR];
  },
  [STOCKS_GETTERS.GET_ERROR](state, getters, rootState, rootGetters) {
    return state[STATE_KEYS.ERROR_STRING];
  },
};
