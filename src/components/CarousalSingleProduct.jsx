import React, { Component } from "react";
import Slider from "react-slick";

function CarousalSingleProduct({ images }) {
  // console.log(images)
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };


  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images && images?.map((ele) => (
          <div key={ele.public_id}>
          <img
            src={ele.url}
            alt="image 1"
            className="h-full w-full object-cover bg-no-repeat"
          />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarousalSingleProduct;
