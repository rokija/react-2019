import React, { Component } from "react";
import { Button } from "reactstrap";
import PostModal from "../PostModal/PostModal";
import accentureLogo from "../../assets/logo-acn.png";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  onOpenModal = () => {
    this.setState({ isOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="Header">
        <div className="Header__title">
          <img
            className="Header__title__logo"
            src={accentureLogo}
            alt="accenture"
          />
          Bootcamp title
        </div>
        <Button onClick={this.onOpenModal} color="dark">
          Upload
        </Button>
        {isOpen && <PostModal onClose={this.onCloseModal} />}
      </div>
    );
  }
}

export default Header;
