import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Register.css";

export const sum = (a, b) => a + b;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, username } = this.state;

    return (
      <div className="Register">
        <div className="Register__content">
          <h2>Register</h2>
          {email}
          <form>
            <div className="form-group">
              <label>username</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="username"
                value={username}
              />
            </div>

            <div className="form-group">
              <label>email</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="email"
                name="email"
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
            <Button
              onClick={() =>
                this.props.onRegister(
                  this.state.username,
                  this.state.email,
                  this.state.password
                )
              }
              color="dark"
            >
              Register
            </Button>
          </form>
          <div className="Register__content__link">
            <Link to="/login">already registered? login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
