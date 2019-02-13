import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import {
  API,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "../../constants";

/* ------ actions ------- */

const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  };
};

const registerError = () => {
  return {
    type: REGISTER_ERROR
  };
};

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR
  };
};

/* ---- action creators ----- */

export const register = (username, email, password) => {
  return dispatch => {
    return BootcampAPI.post(API.REGISTER, {
      email: email,
      username: username,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
      .then(() => dispatch(registerSuccess()))
      .catch(() => dispatch(registerError()));
  };
};

export const login = (email, password) => {
  return dispatch => {
    return BootcampAPI.post(API.LOGIN, {
      email: email,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
      .then(res => {
        const token = res.data.payload.token;

        localStorage.setItem("jwtToken", token);
        dispatch(loginSuccess());
      })
      .catch(() => dispatch(loginError()));
  };
};
