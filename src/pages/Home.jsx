import React from "react";
import img from "../assets/catbanner-01.jpg";
import img2 from "../assets/catbanner-02.jpg";
import img3 from "../assets/catbanner-03.jpg";
import img4 from "../assets/catbanner-04.jpg";
import ImageCarousel from "../components/ImageCarousel";
import Card from "../components/Card";

import img5 from "../assets/service.png";
import img6 from "../assets/service-02.png";
import img7 from "../assets/service-03.png";
import img8 from "../assets/service-04.png";
import img9 from "../assets/service-05.png";
import { Carousel } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function Home() {
  return (
    <div className="">
      {/* first section */}
      <section className="grid grid-cols-4 grid-rows-2 gap-2 lg:px-8 px-2 py-8">
        <div className="lg:col-span-2 row-span-2 rounded-lg overflow-hidden col-span-4">
          {/* <img src={img} className='h-full w-full object-cover' /> */}
          <ImageCarousel name="Anuag" />
        </div>

        <Card
          img={img}
          subhead="best sale"
          head="iPadS13+Pro"
          desp="From $999.00 or $41.62/mo."
        />
        <Card
          img={img2}
          subhead="best sale"
          head="iPadS13+Pro"
          desp="From $999.00 or $41.62/mo."
        />
        <Card
          img={img3}
          subhead="best sale"
          head="iPadS13+Pro"
          desp="From $999.00 or $41.62/mo."
        />
        <Card
          img={img4}
          subhead="best sale"
          head="iPadS13+Pro"
          desp="From $999.00 or $41.62/mo."
        />
      </section>

      {/* second section - for lg and md */}
      <section className="lg:block md:block hidden">
        <div className="w-full bg-gray-200 lg:px-16 px-2 py-8 flex lg:justify-between justify-center items-center gap-9 flex-wrap">
          <div className="flex gap-5">
            <img src={img5} className="object-contain" />
            <div className="leading-[22px] capitalize">
              <p className="text-[16px] font-semibold">Free shipping</p>
              <p className="text-gray-500 text-xs">from all orders over $100</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img6} className="object-contain" />
            <div className="leading-[22px] capitalize">
              <p className="text-[16px] font-semibold">Free shipping</p>
              <p className="text-gray-500 text-xs">from all orders over $100</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img7} className="object-contain" />
            <div className="leading-[22px] capitalize">
              <p className="text-[16px] font-semibold">Free shipping</p>
              <p className="text-gray-500 text-xs">from all orders over $100</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img8} className="object-contain" />
            <div className="leading-[22px] capitalize">
              <p className="text-[16px] font-semibold">Free shipping</p>
              <p className="text-gray-500 text-xs">from all orders over $100</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={img9} className="object-contain" />
            <div className="leading-[22px] capitalize">
              <p className="text-[16px] font-semibold">Free shipping</p>
              <p className="text-gray-500 text-xs">from all orders over $100</p>
            </div>
          </div>
        </div>
      </section>

      {/* second section - for sm */}
      <section className="lg:hidden md:hidden sm:block">
        <div className="w-full bg-gray-200 lg:px-16 px-2 py-8">
          <Carousel
            className="rounded-xl overflow-hidden"
            autoplay={true}
            loop={true}
            prevArrow={false}
            nextArrow={false}
            navigation={false}
          >
            <div className="relative h-full w-full">
              <div className="flex gap-5 justify-center">
                <img src={img5} className="object-contain" />
                <div className="leading-[22px] capitalize">
                  <p className="text-[16px] font-semibold">Free shipping</p>
                  <p className="text-gray-500 text-xs">
                    from all orders over $100
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <div className="flex gap-5 justify-center">
                <img src={img6} className="object-contain" />
                <div className="leading-[22px] capitalize">
                  <p className="text-[16px] font-semibold">Free shipping</p>
                  <p className="text-gray-500 text-xs">
                    from all orders over $100
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <div className="flex gap-5 justify-center">
                <img src={img7} className="object-contain" />
                <div className="leading-[22px] capitalize">
                  <p className="text-[16px] font-semibold">Free shipping</p>
                  <p className="text-gray-500 text-xs">
                    from all orders over $100
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* third section -category */}
      <section className="h-fit w-full bg-gray-200 lg:px-10">
        <div className="w-full bg-white  rounded-lg px-6 py-10 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-5 grid-rows-10 gap-2">
          {/* card */}
          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-7 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                computers & laptop
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/laptop.jpg" className="w-16 h-auto" />
          </div>

          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-4 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                camera & videos
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/camera.jpg" className="w-16 h-auto" />
          </div>
          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-7 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                computers & laptop
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/laptop.jpg" className="w-16 h-auto" />
          </div>

          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-4 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                camera & videos
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/camera.jpg" className="w-16 h-auto" />
          </div>
          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-7 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                computers & laptop
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/laptop.jpg" className="w-16 h-auto" />
          </div>

          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-4 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                camera & videos
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/camera.jpg" className="w-16 h-auto" />
          </div>
          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-7 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                computers & laptop
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/laptop.jpg" className="w-16 h-auto" />
          </div>

          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-4 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                camera & videos
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/camera.jpg" className="w-16 h-auto" />
          </div>
          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-7 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                computers & laptop
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/laptop.jpg" className="w-16 h-auto" />
          </div>

          <div className="shadow-md hover:shadow-lg rounded-sm flex items-center justify-center pl-2 py-4 min-w-56 gap-2 cursor-pointer">
            <div className="capitalize ">
              <p className="font-semibold lg:text-sm min-w-36">
                camera & videos
              </p>
              <p className="text-xs text-gray-500">8 items</p>
            </div>
            <img src="../src/assets/camera.jpg" className="w-16 h-auto" />
          </div>
        </div>
      </section>

      {/* marquee brand section */}
      <section className="bg-gray-200 py-16 px-10 shadow-2xl">
        <Marquee
          pauseOnHover={true}
          direction="right"
          className="bg-white py-2 rounded-sm shadow-xl"
        >
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-01.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-02.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-03.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-04.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-05.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-06.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-07.png" />
          <img className="mx-10 w-28 h-auto" src="../src/assets/brand-08.png" />
        </Marquee>
      </section>

      {/* blog section */}
      <section className="bg-gray-200 px-10">
        <div className="flex justify-between">
          <h1 className="capitalize text-xl font-semibold">our latest news</h1>
          <div className="flex gap-1">
            <div className="w-5 h-5 cursor-pointer hover:bg-black hover:text-white grid place-items-center rounded-full"><IoIosArrowBack /></div>
            <div className="w-5 h-5 cursor-pointer hover:bg-black hover:text-white grid place-items-center rounded-full"><IoIosArrowForward /></div>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Home;
