<template>
  <span>
    <span class="row align-items-center">
      <span class="col-2">
        <span class="badge badge-primary">
          {{ getSymbol }}
        </span>
      </span>
      <span class="col-4 col-xl-3">
        {{ getName }}
      </span>
      <span class="col-2">
        {{ getRegion }}
      </span>
      <span class="col-2">
        <span class="badge badge-success" :title="getPriceTitle">
          {{ getPrice }}
        </span>
      </span>
      <span class="col-2 col-xl-3">
        <button
          type="button"
          class="btn btn-sm btn-success m-1"
          @click="onCheckPrice(getSymbol)"
        >
          Check Price
        </button>
        <button
          type="button"
          class="btn btn-sm btn-danger m-1"
          @click="onBuy(getSymbol)"
        >
          Buy
        </button>
      </span>
    </span>
    <span class="progress" v-if="isFetching">
      <span
        class="
          progress-bar progress-bar-striped progress-bar-animated
          bg-success
        "
      ></span>
    </span>
  </span>
</template>

<script>
import { formatCurrency } from "../utils";

export default {
  name: "Stock",
  props: {
    stockObject: {
      type: Object,
      required: true,
    },
    onCheckPrice: {
      type: Function,
      required: true,
    },
    onBuy: {
      type: Function,
      required: true,
    },
  },
  computed: {
    getSymbol() {
      return this.stockObject["symbol"] || "Symbol N/A";
    },
    getName() {
      return this.stockObject["name"] || "Name N/A";
    },
    getRegion() {
      return this.stockObject["region"] || "Region N/A";
    },
    getCurrency() {
      return this.stockObject["currency"] || "Currency N/A";
    },
    getPrice() {
      if (this.stockObject["price"]) {
        return formatCurrency(this.stockObject["price"], this.getCurrency);
      }
      return "N/A";
    },
    getPriceTitle() {
      return `Price in ${this.getCurrency}`;
    },
    isFetching() {
      return this.stockObject["isFetching"] || false;
    },
  },
};
</script>

<style scoped>
.progress {
  height: 4px;
  margin-top: 0.5em;
}
.progress-bar {
  width: 100%;
}
</style>
