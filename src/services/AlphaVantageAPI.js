import axios from "axios";

import { ALPHAVANTAGE } from "../consts.js";
import {
  normalizeQuote,
  normalizeSearchMatches,
} from "./AlphaVantageTransformer.js";

const AlphaVantageAPI = axios.create({
  baseURL: ALPHAVANTAGE.ENDPOINT,
});

AlphaVantageAPI.interceptors.request.use((request) => {
  if (request.method.toLowerCase() === "get") {
    request.params = request.params || {};
    request.params["apikey"] = ALPHAVANTAGE.API_KEY;
  }
  return request;
});

/**
 * Search
 *
 * @param {string} value
 *
 * @return {Promise<[]|StockObject[]|string>}
 */
async function search(value) {
  // no value specified (empty string)
  if (!value) {
    return [];
  }

  try {
    const { data } = await AlphaVantageAPI.get("/query", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords: value,
      },
    });

    const { bestMatches, Note } = data;

    // request success
    if (Array.isArray(bestMatches)) {
      return normalizeSearchMatches(bestMatches);
    }

    // request failed with an error
    if (Note) {
      return String(Note);
    }

    // request failed without an error
    return [];
  } catch (error) {
    // api call failed
    return String(error);
  }
}

/**
 * Check Price
 *
 * @param {string} symbol
 *
 * @return {Promise<number|string>}
 */
async function checkPrice(symbol) {
  try {
    const { data } = await AlphaVantageAPI.get("/query", {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: symbol,
      },
    });

    const { price } = normalizeQuote(data);

    // base case
    if (price) {
      return price;
    }

    // recursion case: wait 1 min
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000 * 60);
    });

    return checkPrice(symbol);
  } catch (error) {
    return String(error);
  }
}

export { search, checkPrice };
