<template>
  <div>
    <h1 class="text-center mb-4">Signup</h1>

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
              :class="{
                'is-invalid': emailError,
                'is-valid': email && !emailError,
              }"
              @input="validateEmail"
            />
            <div class="invalid-feedback">
              {{ emailError }}
              Valid Email Address is Required.
            </div>
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
              :class="{
                'is-invalid': passwordError,
                'is-valid': password && !passwordError,
              }"
              @input="validatePassword"
            />
            <div class="invalid-feedback">
              {{ passwordError }}
            </div>
          </div>
          <div class="form-group">
            <label for="confirmPassword" class="sr-only"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Confirm Password... "
              required
              v-model="confirmPassword"
              :class="{
                'is-invalid': confirmPasswordError,
                'is-valid': confirmPassword && !confirmPasswordError,
              }"
              @input="validateConfirmPassword"
            />
            <div class="invalid-feedback">
              {{ confirmPasswordError }}
            </div>
          </div>
          <button type="submit" class="btn btn-block btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
    };
  },
  methods: {
    async validateEmail($event) {
      /** @type {HTMLInputElement} */
      const input = $event.target;

      this.emailError = "";
      if (input.validationMessage) {
        this.emailError = input.validationMessage;
      }
    },
    async validatePassword($event) {
      /** @type {HTMLInputElement} */
      const input = $event.target;

      this.passwordError = "";
      if (input.validationMessage) {
        this.passwordError = input.validationMessage;
        return;
      }

      this.validatePasswords();
    },
    async validateConfirmPassword($event) {
      /** @type {HTMLInputElement} */
      const input = $event.target;

      this.confirmPasswordError = "";
      if (input.validationMessage) {
        this.confirmPasswordError = input.validationMessage;
        return;
      }

      this.validatePasswords();
    },
    async validatePasswords() {
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Password must match Confirm Password.";
      }
    },
    async onSubmit($event) {
      /** @type {HTMLFormElement} */
      const form = $event.target;

      form.classList.remove("was-validated");

      if (form.checkValidity() === false) {
        form.classList.add("was-validated");
      }
    },
  },
};
</script>

<style scoped></style>
