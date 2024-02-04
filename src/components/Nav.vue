<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link tag="a" class="navbar-brand" :to="{ name: 'Home' }" exact>
        Stock Trader
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <template v-if="isSignedIn">
          <ul class="navbar-nav mr-auto">
            <li
              v-for="route in routesAuth"
              :key="route.path"
              class="nav-item"
              :class="{ active: route.path === getCurrentPath }"
            >
              <router-link class="nav-link" :to="{ name: route.name }">
                {{ route.name }}
                <span v-if="route.path === getCurrentPath" class="sr-only">
                  (current)
                </span>
              </router-link>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ getFullName }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>

          <span class="navbar-text text-info">
            {{ getFunds }}
          </span>
        </template>
        <template v-else>
          <ul class="navbar-nav ml-auto">
            <li
              v-for="route in routes"
              :key="route.path"
              class="nav-item"
              :class="{ active: route.path === getCurrentPath }"
            >
              <router-link class="nav-link" :to="{ name: route.name }">
                {{ route.name }}
                <span v-if="route.path === getCurrentPath" class="sr-only">
                  (current)
                </span>
              </router-link>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { routes as routesDefinition } from "../router/";
import { MODULES } from "@/store/modules";
import { ACCOUNT_GETTERS } from "@/store/modules/account/getters";

const routes = [];
const routesAuth = [];

for (const route of routesDefinition) {
  if (route.exclude) {
    continue;
  }
  if (route.requireAuth) {
    routesAuth.push(route);
  } else {
    routes.push(route);
  }
}

export default {
  name: "Nav",
  data() {
    return {
      routes,
      routesAuth,
    };
  },
  computed: {
    ...mapGetters(MODULES.ACCOUNT, {
      isSignedIn: ACCOUNT_GETTERS.IS_SIGNED_IN,
      getFullName: ACCOUNT_GETTERS.GET_FULL_NAME,
      getFunds: ACCOUNT_GETTERS.GET_FUNDS,
    }),
    getCurrentPath() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped></style>
