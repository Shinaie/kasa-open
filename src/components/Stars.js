import React from "react";
import starFull from "../assets/stars_full.svg";
import starEmpty from "../assets/stars_empty.svg";

const Stars = ({ rating }) => {
  // un tableau d'étoiles en fonction du rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
        <img src={i < rating ? starFull : starEmpty} alt="" />
      </span>
    );
  }

  return <div className="stars-container">{stars}</div>;
};

export default Stars;
