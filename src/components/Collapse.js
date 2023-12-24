import React, { useState } from "react";
import arrow from "../assets/arrow_back_ios-24px 2.svg";

const Collapse = ({ titleKey, textKey }) => {
  //determine si le texte est ouvert, il est faux en l'état
  const [isExpanded, setExpanded] = useState(false);
  //fonction au moment du clic sur arrow

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="description-container">
      <div className="main-deroulant">
        <h2>{titleKey}</h2>
        <img
          src={arrow}
          alt=""
          onClick={handleClick}
          className={`collapse${isExpanded ? "-active" : ""}`}
        />
      </div>
      <p className={isExpanded ? "dropdown-exit" : ""}>{textKey}</p>
    </div>
  );
};

export default Collapse;
