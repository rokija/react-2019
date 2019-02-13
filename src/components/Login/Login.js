import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { onLogin } = this.props;

    return (
      <div className="Login">
        <div className="Login__content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>email</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="email"
                name="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label>password</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="password"
                name="password"
                value={password}
              />
            </div>
            <Button onClick={() => onLogin(email, password)} color="dark">
              Login
            </Button>
          </form>
          <div className="Login__content__link">
            <Link to="/register">go to register</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
