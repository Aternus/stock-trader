import { AccountModel, STATE_KEYS } from "./state.js";

import { formatCurrency } from "../../../utils";

export const ACCOUNT_GETTERS = {
  GET_FULL_NAME: "getFullName",
  GET_FUNDS: "getFunds",
  IS_SIGNED_IN: "isSignedIn",
};

export default {
  [ACCOUNT_GETTERS.GET_FULL_NAME](state, getters, rootState, rootGetters) {
    return `${state[STATE_KEYS.ACCOUNT[AccountModel.firstName]]} ${
      state[STATE_KEYS.ACCOUNT[AccountModel.lastName]]
    }`;
  },
  [ACCOUNT_GETTERS.GET_FUNDS](state, getters, rootState, rootGetters) {
    return formatCurrency(state[STATE_KEYS.ACCOUNT[AccountModel.funds]]);
  },
  [ACCOUNT_GETTERS.IS_SIGNED_IN](state, getters, rootState, rootGetters) {
    return state[STATE_KEYS.ACCOUNT] !== null;
  },
};
