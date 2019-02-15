import React, { Component } from "react";
import { connect } from "redux";
import Header from "../components/Header/Header";

class HeaderContainer extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return <Header isOpen={isOpen} toggleModal={this.toggleModal} />;
  }
}

export default HeaderContainer;
