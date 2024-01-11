import React, { useState } from "react";
import arrowLeft from "../assets/arrow_left.svg";
import arrowRight from "../assets/arrow_right.svg";

const Carrousel = ({ data }) => {
  //Hook useState : position actuelle de la slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.pictures.length - 1 : prevSlide - 1
    );
  };

  const showArrowsCont = data.pictures.length > 1;

  return (
    <div className="slider-container">
      {showArrowsCont && (
        <>
          <img
            src={arrowLeft}
            onClick={prevSlide}
            alt="arrow-left"
            className="slider-arrow arrow-left"
          />
          <img
            src={arrowRight}
            onClick={nextSlide}
            alt="arrow-right"
            className="slider-arrow arrow-right"
          />
        </>
      )}
      <img src={data.pictures[currentSlide]} alt="" className="slider" />
      {showArrowsCont && (
        <div className="cont-container">
          <p>
            {currentSlide === data.pictures.length
              ? currentSlide - 1
              : currentSlide + 1}
            / {data.pictures.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
