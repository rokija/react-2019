import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { validateToken } from "../redux/actions/userActions";

class ProtectedRouteContainer extends Component {
  constructor(props) {
    super(props);

    this.token = localStorage.getItem("jwtToken");
  }

  render() {
    const { component, path } = this.props;

    return this.token ? (
      <Route exact path={path} component={component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  console.log("map state", state);
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = {
  validateToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRouteContainer);
