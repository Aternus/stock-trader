import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";

const Portfolio = () => import("../views/Portfolio.vue");
const Stocks = () => import("../views/Stocks.vue");
const Transactions = () => import("../views/Transactions.vue");
const Signin = () => import("../views/Signin.vue");
const Signup = () => import("../views/Signup.vue");

Vue.use(VueRouter);

/**
 * @typedef {{
 *   exclude: boolean,
 *   requireAuth: boolean,
 * }} MyRouteConfig
 */

/** @type {(MyRouteConfig & RouteConfig)[]} */
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    requireAuth: true,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    requireAuth: true,
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks,
    requireAuth: true,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
    requireAuth: true,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

export { routes };
