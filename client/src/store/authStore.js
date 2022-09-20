import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { auth } from "./reducers/reducer";
const rootReducer = combineReducers({ auth });

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
);