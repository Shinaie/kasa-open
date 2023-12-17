import React from "react";
import { NavLink } from "react-router-dom";
import dblogement from "../data/logement.json";

const Card = () => {
  return (
    <div className="gallery">
      {dblogement.map((logement, index) => (
        <NavLink key={index} to={`./logement/${logement.id}`}>
          <div className="card">
            <img src={logement.cover} alt="" />
            <p>{logement.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
