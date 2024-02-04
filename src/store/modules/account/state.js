export const STATE_KEYS = {
  IS_FETCHING: "isFetching",
  IS_ERROR: "isError",
  ERROR_STRING: "errorString",
  ACCOUNT: "account",
};

export default {
  [STATE_KEYS.IS_FETCHING]: false,
  [STATE_KEYS.IS_ERROR]: false,
  [STATE_KEYS.ERROR_STRING]: "",
  [STATE_KEYS.ACCOUNT]: null,
};

export const AccountModel = {
  id: "id",
  email: "email",
  firstName: "firstName",
  lastName: "lastName",
  funds: "funds",
};
