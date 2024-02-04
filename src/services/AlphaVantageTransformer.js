import get from "lodash/get.js";

/**
 * @typedef {{
  "1. symbol": string,
  "2. name": string,
  "3. type": string,
  "4. region": string,
  "5. marketOpen": string,
  "6. marketClose": string,
  "7. timezone": string,
  "8. currency": string,
  "9. matchScore": string
}} AVStockObject
 */

/**
 * @typedef {{
  symbol: string,
  name: string,
  region: string,
  currency: string,
  price: number,
  isFetching: boolean
}} StockObject
 */

/**
 * @typedef {{
  "Global Quote": {
    "01. symbol": string,
    "02. open": string,
    "03. high": string,
    "04. low": string,
    "05. price": string,
    "06. volume": string,
    "07. latest trading day": string,
    "08. previous close": string,
    "09. change": string,
    "10. change percent": string
  }
}} AVQuoteObject
 */

/**
 * @typedef {{
  price: number
}} QuoteObject
 */

/**
 * Normalize Stock Object
 *
 * @param {AVStockObject} response
 *
 * @return {StockObject}
 */
function normalizeStockObject(response) {
  return {
    symbol: response["1. symbol"],
    name: response["2. name"],
    region: response["4. region"],
    currency: response["8. currency"],
    price: 0,
    isFetching: false,
  };
}

/**
 * Normalize Search Matches
 *
 * @param {AVStockObject[]} matches
 *
 * @return {StockObject[]}
 */
function normalizeSearchMatches(matches) {
  const results = [];
  for (const match of matches) {
    results.push(normalizeStockObject(match));
  }
  return results;
}

/**
 * Normalize Quote
 *
 * @param {AVQuoteObject} quote
 *
 * @return {QuoteObject}
 */
function normalizeQuote(quote) {
  const price = Number(get(quote, ["Global Quote", "05. price"]));
  return {
    price: isNaN(price) ? 0 : price,
  };
}

export { normalizeSearchMatches, normalizeQuote };
