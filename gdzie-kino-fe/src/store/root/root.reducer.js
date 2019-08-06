import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { appReducer } from "../app";
import { authReducer } from "../auth";
import { searchReducer } from "../search";
import { modalsReducer } from "../modals";

const authStorageConfig = {
  key: "gk-auth",
  storage,
  whitelist: ["token", "id"]
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: persistReducer(authStorageConfig, authReducer),
  search: searchReducer,
  modals: modalsReducer
});

export { rootReducer };
