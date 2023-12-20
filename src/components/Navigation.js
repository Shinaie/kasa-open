import React from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
