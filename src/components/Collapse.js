import React, { useState } from "react";
import arrow from "../assets/arrow_back_ios-24px 2.svg";

const Collapse = ({ titleKey, textKey }) => {
  //determine si le texte est ouvert, il est faux en l'état
  const [isExpanded, setExpanded] = useState(false);
  //fonction au moment du clic sur arrow

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  //Vérifie si textKey est un tableau non vide
  const bulletedList = Array.isArray(textKey) && textKey.length > 0;

  const contentElement = bulletedList ? (
    <ul className={`collapse${isExpanded ? "-active" : ""}`}>
      {textKey.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className={`collapse${isExpanded ? "-active" : ""}`}>{textKey}</p>
  );

  return (
    <div className="description-container">
      <div className="main-deroulant">
        <h2>{titleKey}</h2>
        <img
          src={arrow}
          alt=""
          onClick={handleClick}
          className={`arrowImg${isExpanded ? "-active" : ""}`}
        />
      </div>
      {contentElement}
    </div>
  );
};

export default Collapse;
