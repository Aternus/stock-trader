import { ActionContext } from "vuex";

import { STATE_KEYS } from "./state.js";
import { ACCOUNT_MUTATIONS } from "./mutations.js";

export const ACCOUNT_ACTIONS = {
  SIGNIN: "signIn",
  SIGNUP: "signUp",
};

/**
 * SignIn
 *
 * @param {ActionContext} context
 * @param {{email: string, password: string }} payload
 */
async function signIn(context, payload) {
  const { state, commit } = context;
}

/**
 * SignUp
 *
 * @param {ActionContext} context
 * @param {{email: string, password: string}} payload
 */
function signUp(context, payload) {
  const { state, commit } = context;
}

export default {
  [ACCOUNT_ACTIONS.SIGNIN]: signIn,
  [ACCOUNT_ACTIONS.SIGNUP]: signUp,
};
