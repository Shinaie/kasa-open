import React from "react";
import arrow from "../assets/arrow_back_ios-24px 2.svg";

const Collapse = ({ data, titleKey, textKey }) => {
  return (
    <>
      {data.map((content, index) => (
        <div key={index} className="description-container">
          <div className="main-deroulant">
            <h2>{content[titleKey]}</h2>
            <img src={arrow} alt="" />
          </div>
          <p className="dropdown-exit">{content[textKey]}</p>
        </div>
      ))}
    </>
  );
};

export default Collapse;
