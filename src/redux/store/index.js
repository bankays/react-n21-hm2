import { combineReducers, createStore } from "redux";
import loginReducer from "../reducer/Login-reduceer";
import likeReducer from "../reducer/Like-reducer";
import addReducer from "../reducer/AddCard-reducer";
const store = createStore(
  combineReducers({ login: loginReducer, like: likeReducer, add: addReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
