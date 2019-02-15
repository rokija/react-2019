import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { validateToken } from "../redux/actions/userActions";

class ProtectedRouteContainer extends Component {
  componentDidMount() {
    this.props.validateToken();
  }

  componentDidUpdate() {
    console.log("component did update", this.props);
  }

  render() {
    const { component, path } = this.props;
    console.log(this.props);

    return this.props.token ? (
      <Route exact path={path} component={component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  console.log("map state", state);
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    token: state.loginReducer.token
  };
};

const mapDispatchToProps = {
  validateToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRouteContainer);
