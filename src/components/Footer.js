import React from "react";
import logoFooter from "../assets/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logoFooter} alt="footer-logo" />
      </div>
      <div className="subtitle">
        <p> © 2020 Kasa. All rights reserverd</p>
      </div>
    </footer>
  );
};

export default Footer;
