import React, { Component } from "react";
import { Button } from "reactstrap";
import PostModal from "../PostModal/PostModal";
import accentureLogo from "../../assets/logo-acn.png";
import "./Header.css";

class Header extends Component {
  render() {
    const {
      isOpen,
      toggleModal,
      onInputChange,
      onImageUpload,
      onPostSubmit
    } = this.props;

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
        <Button onClick={toggleModal} color="dark">
          Upload
        </Button>
        {isOpen && (
          <PostModal
            onImageUpload={onImageUpload}
            onInputChange={onInputChange}
            onPostSubmit={onPostSubmit}
            onClose={toggleModal}
          />
        )}
      </div>
    );
  }
}

export default Header;
