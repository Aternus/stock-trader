import axios from "axios";

import { FIREBASE } from "../consts.js";

const DBAPI = axios.create({
  baseURL: FIREBASE.DB_ENDPOINT,
});

export { DBAPI };
