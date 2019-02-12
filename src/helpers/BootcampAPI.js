import axios from "axios";

class APIClass {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_APIURL,
      timeout: 1000
    });
  }

  getDefaultHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      responseType: "application/json"
    };
  }

  get(url) {
    return this.call("get", url);
  }

  post(url, data) {
    return this.call("post", url, data);
  }

  call(method, url, data) {
    return this.instance[method](url, data, {
      method,
      headers: this.getDefaultHeaders()
    });
  }
}

const API = new APIClass();

export default API;
