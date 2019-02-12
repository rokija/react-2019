import React, { Component } from "react";
import { Button } from "reactstrap";
import accentureLogo from "../../assets/logo-acn.png";
import "./Header.css";

class Header extends Component {
  render() {
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
        <Button color="dark">Upload</Button>
      </div>
    );
  }
}

export default Header;
