import $ from "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// initialize bootstrap's tooltip library
$("body").tooltip({
  selector: "[title]",
});
