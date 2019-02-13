import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import { API, REGISTER_SUCCESS, REGISTER_ERROR } from "../../constants";

/* ------ actions ------- */

const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
    isRegistered: true
  };
};

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    isRegistered: false
  };
};

/* ---- action creators ----- */

export const register = (username, email, password) => {
  return dispatch => {
    return BootcampAPI.post(API.REGISTER, {
      email,
      username,
      hashedPassword: CryptoJS.SHA256(password).toString()
    })
      .then(() => dispatch(registerSuccess()))
      .catch(() => dispatch(registerError()));
  };
};
