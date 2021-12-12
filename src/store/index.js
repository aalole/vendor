import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./loginReducer";
const middleware = [thunk];

const userDataFromLocalStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const reducer = combineReducers({
  loginUser: loginReducer,
});

const initialAppState = {
  loginUser: { userData: userDataFromLocalStorage },
};

const store = createStore(
  reducer,
  initialAppState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
