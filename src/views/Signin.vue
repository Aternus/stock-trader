<template>
  <div>
    <h1 class="text-center mb-4">Signin</h1>

    <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>

    <div class="row">
      <div class="col-4 offset-4">
        <form novalidate @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email..."
              required
              v-model="email"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Email is required.</div>
          </div>
          <div class="form-group">
            <label for="password" class="sr-only">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password... "
              required
              v-model="password"
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Password is required.</div>
          </div>
          <div class="form-group custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="rememberMe"
              v-model="rememberMe"
            />
            <label class="custom-control-label" for="rememberMe">
              Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-block btn-primary">
            Signin
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    async onSubmit($event) {
      /** @type {HTMLFormElement} */
      const form = $event.target;

      form.classList.remove("was-validated");

      if (form.checkValidity() === false) {
        form.classList.add("was-validated");
        return;
      }
    },
  },
};
</script>

<style scoped></style>
