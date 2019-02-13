import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../../constants";

const defaultState = {
  isRegistered: false,
  isLoggedIn: false
};

export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true };
    case REGISTER_ERROR:
      return { ...state, isRegistered: false };
    default:
      return state;
  }
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case LOGIN_ERROR:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
