import React, { Component } from "react";
import Slider from "react-slick";

function CarousalSingleProduct({ images }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };


  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((ele) => (
          <div key={ele.asset_id}>
          <img
            src={ele.url}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarousalSingleProduct;
