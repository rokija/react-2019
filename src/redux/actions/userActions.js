import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import {
  API,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
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

const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR
  };
};

const getUsersSuccess = res => {
  return {
    type: GET_USERS_SUCCESS,
    payload: res.data.payload
  };
};

const getUsersError = () => {
  return {
    type: GET_USERS_ERROR
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
        dispatch(loginSuccess(token));
      })
      .catch(() => dispatch(loginError()));
  };
};

export const getUsers = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_USERS)
      .then(res => {
        dispatch(getUsersSuccess(res));
      })
      .catch(err => {
        console.error(err);
        dispatch(getUsersError());
      });
  };
};

export const validateToken = () => {
  return dispatch => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      dispatch(loginSuccess(token));
    }
    dispatch(loginError());
  };
};
