import { combineReducers } from "redux";
import { registerReducer } from "./userReducers";

const rootReducer = combineReducers({
  registerReducer: registerReducer
});

export default rootReducer;
