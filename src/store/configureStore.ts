import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

function configureStore(): Store {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
}

export default configureStore;
