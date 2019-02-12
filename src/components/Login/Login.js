import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login__content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>email</label>
              <input className="form-control" type="email" />
            </div>

            <div className="form-group">
              <label>password</label>
              <input className="form-control" type="password" />
            </div>
            <Button color="dark">Login</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
