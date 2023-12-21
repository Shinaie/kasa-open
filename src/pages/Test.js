import React from "react";
import dataAbout from "../data/about.json";

const Test = () => {
  console.log(dataAbout);

  return (
    <div>
      <p>page blanche : {dataAbout[1].text}</p>
    </div>
  );
};

export default Test;
