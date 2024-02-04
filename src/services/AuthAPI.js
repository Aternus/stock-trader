import axios from "axios";

import { FIREBASE } from "../consts.js";

const AuthAPI = axios.create({
  baseURL: FIREBASE.AUTH_ENDPOINT,
  validateStatus: null,
});

AuthAPI.interceptors.request.use((request) => {
  if (request.method.toLocaleLowerCase() === "post") {
    request.params = request.params || {};
    request.params["key"] = FIREBASE.API_KEY;
  }
  return request;
});

async function signin({ email, password, returnSecureToken = true }) {
  if (!email) {
    // missing email
    return;
  }
  if (!password) {
    // missing password
    return;
  }

  // send signin request
  const { data } = await AuthAPI.post("accounts:signInWithPassword", {
    email,
    password,
    returnSecureToken,
  });

  return data;
}

async function signup({ email, password, returnSecureToken = true }) {
  if (!email) {
    // missing email
    return;
  }
  if (!password) {
    // missing password
    return;
  }

  // send signup request
  const { data } = await AuthAPI.post("accounts:signUp", {
    email,
    password,
    returnSecureToken,
  });

  return data;
}

export { signin, signup };
