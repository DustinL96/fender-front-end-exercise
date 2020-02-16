import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";

import rootReducer from "./reducers";

function configureStore(): Store {
    return createStore(rootReducer, applyMiddleware(logger));
}

export default configureStore;
