import { STATE_KEYS } from "./state.js";

export const STOCKS_MUTATIONS = {
  SEARCH_START: "searchStart",
  SEARCH_END: "searchEnd",
  SEARCH_ERROR: "searchError",
  SEARCH_SUCCESS: "searchSuccess",
  UPDATE_STOCK: "updateStock",
  SEARCH_QUERY_CHANGE: "searchQueryChange",
};

/**
 * Search Start
 *
 * @param {*} state
 */
function searchStart(state) {
  // lock search
  state[STATE_KEYS.IS_SEARCHING] = true;

  // reset error
  state[STATE_KEYS.IS_ERROR] = false;
  state[STATE_KEYS.ERROR_STRING] = "";
}

/**
 * Search End
 *
 * @param {*} state
 */
function searchEnd(state) {
  state[STATE_KEYS.IS_SEARCHING] = false;
}

/**
 * Search Error
 *
 * @param {*} state
 * @param {{error: string}} [payload]
 */
function searchError(state, payload) {
  state[STATE_KEYS.IS_ERROR] = true;
  state[STATE_KEYS.ERROR_STRING] = String(payload.error);
  state[STATE_KEYS.SEARCH_RESULTS] = [];
}

/**
 * Search Success
 *
 * @param {*} state
 * @param {{results: StockObject[]}} [payload]
 */
function searchSuccess(state, payload) {
  state[STATE_KEYS.SEARCH_RESULTS] = payload.results;
}

/**
 * Update Stock
 *
 * @param {*} state
 * @param {StockObject} [payload]
 */
function updateStock(state, payload) {
  // find the stock
  let i;
  const [stockObject] = state[STATE_KEYS.SEARCH_RESULTS].filter(
    (stock, idx) => {
      if (stock.symbol === payload.symbol) {
        i = idx;
        return true;
      }
      return false;
    }
  );

  // replace the stock
  state[STATE_KEYS.SEARCH_RESULTS].splice(i, 1, {
    ...stockObject,
    ...payload,
  });
}

/**
 * Search Query Change
 *
 * @param {*} state
 * @param {{query: string}} [payload]
 */
function searchQueryChange(state, { query }) {
  state[STATE_KEYS.SEARCH_QUERY] = query;
}

export default {
  [STOCKS_MUTATIONS.SEARCH_START]: searchStart,
  [STOCKS_MUTATIONS.SEARCH_END]: searchEnd,
  [STOCKS_MUTATIONS.SEARCH_ERROR]: searchError,
  [STOCKS_MUTATIONS.SEARCH_SUCCESS]: searchSuccess,
  [STOCKS_MUTATIONS.UPDATE_STOCK]: updateStock,
  [STOCKS_MUTATIONS.SEARCH_QUERY_CHANGE]: searchQueryChange,
};
