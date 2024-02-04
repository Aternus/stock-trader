export const STATE_KEYS = {
  SEARCH_QUERY: "searchQuery",
  SEARCH_RESULTS: "searchResults",
  IS_SEARCHING: "isSearching",
  IS_ERROR: "isError",
  ERROR_STRING: "errorString",
};

export default {
  [STATE_KEYS.SEARCH_QUERY]: "",
  [STATE_KEYS.SEARCH_RESULTS]: [],
  [STATE_KEYS.IS_SEARCHING]: false,
  [STATE_KEYS.IS_ERROR]: false,
  [STATE_KEYS.ERROR_STRING]: "",
};
