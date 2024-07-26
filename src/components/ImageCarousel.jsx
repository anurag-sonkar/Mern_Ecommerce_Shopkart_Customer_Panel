import React from 'react';
import img from "../assets/main-banner-1.jpg";
import img2 from "../assets/main-banner.jpg";
import img3 from "../assets/main-banner-1.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";

function ImageCarousel() {

  return (
    <Carousel className="rounded-xl overflow-hidden" autoplay={true} loop={true} >
      <div className="relative h-full w-full">
        <img
          src={img}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex h-full w-full items-start mt-8 ml-8 md:mt-40 md:ml-10 lg:ml-10 lg:mt-20">
          <div className="w-full px-4 md:px-8 lg:w-1/2 lg:px-0 lg:ml-6">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-xs md:text-2xl lg:text-sm uppercase text-red-700 font-extrabold"
            >
              Supercharged for pros
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-xl sm:text-2xl md:text-5xl lg:text-4xl text-black"
            >
              Special Sale
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80 text-sm lg:mt-7 sm:text-base md:text-lg lg:text-xl lg:text-gray-800 text-black"
            >
              From $999.00 or $41.62/mo. for 24 mo. footnote.
            </Typography>
            <div className="lg:mt-12 md:mt-24">
              <Button size="" color="black" className='rounded-full'>
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex h-full w-full items-start mt-8 ml-8 md:mt-40 md:ml-10 lg:ml-10 lg:mt-20">
          <div className="w-full px-4 md:px-8 lg:w-1/2 lg:px-0 lg:ml-6">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-xs md:text-2xl lg:text-sm uppercase text-red-700 font-extrabold"
            >
              Supercharged for pros
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-xl sm:text-2xl md:text-5xl lg:text-4xl text-black"
            >
              Special Sale
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80 text-sm lg:mt-7 sm:text-base md:text-lg lg:text-xl lg:text-gray-800 text-black"
            >
              From $999.00 or $41.62/mo. for 24 mo. footnote.
            </Typography>
            <div className="lg:mt-12 md:mt-24">
              <Button size="" color="black" className='rounded-full'>
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex h-full w-full items-start mt-8 ml-8 md:mt-40 md:ml-10 lg:ml-10 lg:mt-20">
          <div className="w-full px-4 md:px-8 lg:w-1/2 lg:px-0 lg:ml-6">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-xs md:text-2xl lg:text-sm uppercase text-red-700 font-extrabold"
            >
              Supercharged for pros
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 text-xl sm:text-2xl md:text-5xl lg:text-4xl text-black"
            >
              Special Sale
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80 text-sm lg:mt-7 sm:text-base md:text-lg lg:text-xl lg:text-gray-800 text-black"
            >
              From $999.00 or $41.62/mo. for 24 mo. footnote.
            </Typography>
            <div className="lg:mt-12 md:mt-24">
              <Button size="" color="black" className='rounded-full'>
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
