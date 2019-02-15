import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/userActions";
import Login from "../components/Login/Login";

class LoginContainer extends Component {
  onLogin = (email, password) => {
    if (!email || !password) {
      return;
    }

    this.props.login(email, password).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return <Login onLogin={this.onLogin} />;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
