import React from "react";
import Carrousel from "../components/Carrousel";
import dbLogement from "../data/logement.json";

const Test = () => {
  return (
    <div>
      {/* test du Caroussel  */}
      <Carrousel data={dbLogement} />
    </div>
  );
};

export default Test;
