import { ActionContext } from "vuex";

import {
  search as AlphaVantageSearch,
  checkPrice as AlphaVantageCheckPrice,
} from "../../../services/AlphaVantageAPI.js";

import { STATE_KEYS } from "./state.js";
import { STOCKS_MUTATIONS } from "./mutations.js";

export const STOCKS_ACTIONS = {
  SEARCH: "search",
  CHECK_PRICE: "checkPrice",
};

/**
 * Search
 *
 * @param {ActionContext} context
 * @param {{query: string}} payload
 */
async function search(context, { query }) {
  const { state, commit } = context;

  // search is already in place
  if (state[STATE_KEYS.IS_SEARCHING]) {
    return;
  }

  commit(STOCKS_MUTATIONS.SEARCH_QUERY_CHANGE, { query });

  commit(STOCKS_MUTATIONS.SEARCH_START);

  const searchResults = query ? await AlphaVantageSearch(query) : [];

  if (Array.isArray(searchResults)) {
    commit(STOCKS_MUTATIONS.SEARCH_SUCCESS, { results: searchResults });
  } else {
    commit(STOCKS_MUTATIONS.SEARCH_ERROR, { error: searchResults });
  }

  commit(STOCKS_MUTATIONS.SEARCH_END);
}

/**
 * Check Price
 *
 * @param {ActionContext} context
 * @param {{symbol: string}} [payload]
 */
async function checkPrice(context, { symbol }) {
  const { commit } = context;

  commit(STOCKS_MUTATIONS.UPDATE_STOCK, { symbol, isFetching: true });

  const price = await AlphaVantageCheckPrice(symbol);

  commit(STOCKS_MUTATIONS.UPDATE_STOCK, { symbol, price, isFetching: false });
}

export default {
  [STOCKS_ACTIONS.SEARCH]: search,
  [STOCKS_ACTIONS.CHECK_PRICE]: checkPrice,
};
