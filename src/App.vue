<template>
  <div>
    <Nav />
    <div class="container my-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: { Nav },
};
</script>
