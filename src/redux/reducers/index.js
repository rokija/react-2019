import { combineReducers } from "redux";
import { registerReducer, loginReducer, getUsersReducer } from "./userReducers";
import { postsReducer } from "./postsReducers";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  getUsersReducer,
  postsReducer
});

export default rootReducer;
