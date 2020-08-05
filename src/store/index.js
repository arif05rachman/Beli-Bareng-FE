import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  userReducer,
} from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  listUser : userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;