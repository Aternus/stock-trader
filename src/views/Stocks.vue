<template>
  <div>
    <h1 class="h2">What would you like to buy?</h1>

    <form @submit.prevent="onSubmit" @input="onSearch">
      <div class="form-group">
        <label for="searchQuery" class="sr-only">Search Query</label>
        <input
          type="text"
          class="form-control"
          id="searchQuery"
          aria-describedby="searchQueryHelp"
          placeholder="Symbol..."
          v-model="searchQueryValue"
        />
        <small id="searchQueryHelp" class="form-text text-muted">
          Start typing and we'll get a list of matching symbols.
        </small>
      </div>
    </form>

    <transition
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="alert alert-danger" role="alert" v-if="isError">
        {{ getError }}
      </div>

      <div class="d-flex justify-content-center" v-else-if="isSearching">
        <div class="spinner-border" role="status">
          <span class="sr-only">Searching...</span>
        </div>
      </div>

      <ul class="list-group list-group-flush" v-else-if="getSearchResults">
        <li
          class="list-group-item"
          v-for="stock in getSearchResults"
          :key="stock.symbol"
        >
          <Stock
            :stock-object="stock"
            :on-check-price="onCheckPrice"
            :on-buy="onBuy"
          />
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash/debounce.js";

import Stock from "../components/Stock.vue";
import { MODULES } from "../store/modules";
import { STOCKS_GETTERS } from "../store/modules/stocks/getters.js";
import { STOCKS_ACTIONS } from "../store/modules/stocks/actions.js";

export default {
  name: "Stocks",
  components: { Stock },
  data() {
    return {
      searchQueryValue: "",
    };
  },
  computed: {
    ...mapGetters(MODULES.STOCKS, {
      getSearchQuery: STOCKS_GETTERS.GET_SEARCH_QUERY,
      getSearchResults: STOCKS_GETTERS.GET_SEARCH_RESULTS,
      isSearching: STOCKS_GETTERS.IS_SEARCHING,
      isError: STOCKS_GETTERS.IS_ERROR,
      getError: STOCKS_GETTERS.GET_ERROR,
    }),
  },
  methods: {
    ...mapActions(MODULES.STOCKS, [
      STOCKS_ACTIONS.SEARCH,
      STOCKS_ACTIONS.CHECK_PRICE,
    ]),
    onSubmit($event) {
      console.log($event);
    },
    onSearch: debounce(function ($event) {
      const {
        target: { value: query },
      } = $event;

      this.search({ query });
    }, 300),
    onCheckPrice(symbol) {
      this.checkPrice({ symbol });
    },
    onBuy(symbol) {
      console.log(symbol);
    },
  },
  mounted() {
    this.searchQueryValue = this.getSearchQuery;
  },
};
</script>

<style lang="scss" scoped>
.fadeIn {
  animation-duration: 150ms;
}
.fadeOut {
  animation-duration: 75ms;
}
</style>
