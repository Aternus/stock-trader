import { STATE_KEYS } from "./state.js";

export const ACCOUNT_MUTATIONS = {
  FETCH_START: "fetchStart",
  FETCH_END: "fetchEnd",
};

/**
 * Fetch Start
 *
 * @param {*} state
 */
function fetchStart(state) {
  state[STATE_KEYS.IS_FETCHING] = true;

  // reset error
  state[STATE_KEYS.IS_ERROR] = false;
  state[STATE_KEYS.ERROR_STRING] = "";
}

/**
 * Fetch End
 *
 * @param {*} state
 */
function fetchEnd(state) {
  state[STATE_KEYS.IS_FETCHING] = false;
}

export default {
  [ACCOUNT_MUTATIONS.FETCH_START]: fetchStart,
  [ACCOUNT_MUTATIONS.FETCH_END]: fetchEnd,
};
