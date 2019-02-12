import CryptoJS from "crypto-js";
import BootcampAPI from "../../helpers/BootcampAPI";
import { API } from "../../constants";

/* ------ actions ------- */

/* ---- action creators ----- */

export const register = (username, email, password) => {
  return BootcampAPI.post(API.REGISTER, {
    email,
    username,
    hashedPassword: CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64)
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
