import React from "react";
import Carrousel from "../components/Carrousel";
import dbLogement from "../data/logement.json";

const Test = () => {
  const selectedLogement = dbLogement[0];
  return (
    <div>
      {/* test du Caroussel  */}
      <Carrousel data={selectedLogement} />
    </div>
  );
};

export default Test;
