import React, { useState } from "react";
import arrowLeft from "../img/img_source.png";
import arrowRight from "../img/arrow_right.svg";

const Carrousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previewSlide = () => {
    setCurrentSlide((previewSlide) =>
      previewSlide === 0 ? data.length - 1 : previewSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((previewSlide) =>
      previewSlide === data.length - 1 ? 0 : previewSlide + 1
    );
  };

  return (
    <div className="carrousel-container">
      <img
        src={arrowLeft}
        alt=""
        className="carrousel-arrow arrow-left"
        onClick={previewSlide}
      />
      {data.map((logements, index) => (
        <img
          key={index}
          src={logements.cover}
          alt=""
          className={`slide ${index === currentSlide ? "active" : ""}`}
        />
      ))}
      <img
        src={arrowRight}
        alt=""
        className="carrousel-arrow arrow-Right"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Carrousel;
