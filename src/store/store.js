import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import multi from "redux-multi";
import thunk from "redux-thunk";
import { batchedSubscribe } from "redux-batched-subscribe";
import { createEpicMiddleware } from "redux-observable";
import debounce from "lodash.debounce";

// import { rootEpic, rootReducer } from "./root";
import { rootReducer } from "./root";

import { logger } from "./logger";

let composeFunction = compose;

// const epicMiddleware = createEpicMiddleware(rootEpic);

// const middlewares = [epicMiddleware, multi, thunk];
const middlewares = [multi, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeFunction(
    composeEnhancers(applyMiddleware(...middlewares)),
    batchedSubscribe(
      debounce(notify => {
        notify();
      })
    )
  )
);

const persistor = persistStore(store);

export { store, persistor };
