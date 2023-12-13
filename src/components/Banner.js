import React from "react";
import source1 from "../img/img_source.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={source1} alt="paysage de montagne type breton" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
