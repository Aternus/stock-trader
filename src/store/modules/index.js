import account, { moduleName as accountModuleName } from "./account";
import stocks, { moduleName as stocksModuleName } from "./stocks";

export const MODULES = {
  ACCOUNT: accountModuleName,
  STOCKS: stocksModuleName,
};

export default {
  [MODULES.ACCOUNT]: account,
  [MODULES.STOCKS]: stocks,
};
