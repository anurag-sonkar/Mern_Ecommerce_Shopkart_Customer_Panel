import React, { useEffect, useRef, useState } from "react";

import img from "../assets/catbanner-01.jpg";
import img2 from "../assets/catbanner-02.jpg";
import img3 from "../assets/catbanner-03.jpg";
import img4 from "../assets/catbanner-04.jpg";
import ImageCarousel from "../components/ImageCarousel";
import CardCustom from "../components/CardCustom";

import img5 from "../assets/service.png";
import img6 from "../assets/service-02.png";
import img7 from "../assets/service-03.png";
import img8 from "../assets/service-04.png";
import img9 from "../assets/service-05.png";
import { Carousel, Button } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BlogCard from "../components/BlogCard";
import PopularProductsCard from "../components/PopularProductsCard";
import { FamousCard } from "../components/FamousCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

import { DotChartOutlined } from "@ant-design/icons";
import { Skeleton, Space } from "antd";
import QR from "../components/QR";
import { Link } from "react-router-dom";

function Home() {
  // Skeleton
  const [active, setActive] = useState(true);
  const [block, setBlock] = useState(true);
  const [size, setSize] = useState("large");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");

  const [showQR, setShowQR] = useState(true);

  const dispatch = useDispatch();
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  /* blog slick - slider */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  /* category slick - slider */
  let sliderRef2 = useRef(null);
  var categorySliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };


  console.log(products);

  if (isLoading) {
    return (
      <div className="lg:grid hidden grid-col-4 lg:grid-flow-col grid-flow-row gap-5 place-items-center py-8 px-5 ">
        <div className="col-span-2">
          <Space>
            <Skeleton.Image
              active={active}
              style={{ width: "600px", height: "400px" }}
            />
          </Space>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="">
              <Skeleton.Node
                active={active}
                style={{ width: "300px", height: "190px" }}
              >
                <DotChartOutlined
                  style={{
                    fontSize: 40,
                    color: "#bfbfbf",
                  }}
                />
              </Skeleton.Node>
            </div>
            <div>
              <Skeleton.Node
                active={active}
                style={{ width: "300px", height: "190px" }}
              >
                <DotChartOutlined
                  style={{
                    fontSize: 40,
                    color: "#bfbfbf",
                  }}
                />
              </Skeleton.Node>
            </div>
            <div>
              <Skeleton.Node
                active={active}
                style={{ width: "300px", height: "190px" }}
              >
                <DotChartOutlined
                  style={{
                    fontSize: 40,
                    color: "#bfbfbf",
                  }}
                />
              </Skeleton.Node>
            </div>
            <div>
              <Skeleton.Node
                active={active}
                style={{ width: "300px", height: "190px" }}
              >
                <DotChartOutlined
                  style={{
                    fontSize: 40,
                    color: "#bfbfbf",
                  }}
                />
              </Skeleton.Node>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="">
        {/* category section  - neeche ek auur h baad m dekhna usko */}
        <section className="relative w-full px-7">
          {/* slider */}
          <div className="">
          <Slider
            ref={(slider) => {
              sliderRef2 = slider;
            }}
            {...categorySliderSettings}
          >
            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/grocery.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  grocery
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/mobiles.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  mobiles
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/fashion.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  fashion
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/electronics.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  electronics
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/home-and-furniture.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  home & furniture
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/appliances.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  appliances
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/travel.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  travel
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/beauty-toys-and-more.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  beauty,toys & more
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="/store/electonics"
                className="grid place-items-center cursor-pointer"
              >
                <img
                  src="../src/assets/two-wheelers.webp"
                  className="object-contain lg:w-16 md:w-16 w-10 h-auto"
                />
                <div className="capitalize text-center font-semibold lg:text-sm md:text-sm text-xs">
                  two-wheelers
                </div>
              </Link>
            </div>
          </Slider>
          </div>
        </section>

        {/* first section */}
        <section className="grid grid-cols-4 grid-rows-2 gap-2 lg:px-8 md:px-8 px-2 py-2">
          <div className="lg:col-span-2 row-span-2 rounded-lg overflow-hidden col-span-4">
            {/* <img src={img} className='h-full w-full object-cover' /> */}
            <ImageCarousel />
          </div>

          <CardCustom
            img={img}
            subhead="best sale"
            head="iPadS13+Pro"
            desp="From $999.00 or $41.62/mo."
          />
          <CardCustom
            img={img2}
            subhead="best sale"
            head="iPadS13+Pro"
            desp="From $999.00 or $41.62/mo."
          />
          <CardCustom
            img={img3}
            subhead="best sale"
            head="iPadS13+Pro"
            desp="From $999.00 or $41.62/mo."
          />
          <CardCustom
            img={img4}
            subhead="best sale"
            head="iPadS13+Pro"
            desp="From $999.00 or $41.62/mo."
          />
        </section>

        {/* QR code show */}
        {showQR && (
          <div
            className="fixed lg:top-[70vh] top-[65vh] lg:left-10 left-4 cursor-pointer z-10 inline-block"
            onClick={() => setShowQR(false)}
          >
            <div className="bg-white  rounded-lg relative">
              <QR />
            </div>
            <div className="absolute -top-3 -right-3 bg-black rounded-3xl p-[2px]">
              <RxCross2 color="white" />
            </div>
          </div>
        )}

        {/* second section - for lg and md */}
        <section className="lg:block md:block hidden bg-gray-200 pt-5">
          <div className="w-full bg-white lg:px-16 px-2 py-8 flex lg:justify-between justify-center items-center gap-9 flex-wrap">
            <div className="flex gap-5">
              <img src={img5} className="object-contain" />
              <div className="leading-[22px] capitalize">
                <p className="text-[16px] font-semibold">Free shipping</p>
                <p className="text-gray-500 text-xs">
                  from all orders over $100
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={img6} className="object-contain" />
              <div className="leading-[22px] capitalize">
                <p className="text-[16px] font-semibold">Free shipping</p>
                <p className="text-gray-500 text-xs">
                  from all orders over $100
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={img7} className="object-contain" />
              <div className="leading-[22px] capitalize">
                <p className="text-[16px] font-semibold">Free shipping</p>
                <p className="text-gray-500 text-xs">
                  from all orders over $100
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={img8} className="object-contain" />
              <div className="leading-[22px] capitalize">
                <p className="text-[16px] font-semibold">Free shipping</p>
                <p className="text-gray-500 text-xs">
                  from all orders over $100
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={img9} className="object-contain" />
              <div className="leading-[22px] capitalize">
                <p className="text-[16px] font-semibold">Free shipping</p>
                <p className="text-gray-500 text-xs">
                  from all orders over $100
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* second section - for sm */}
        <section className="lg:hidden md:hidden sm:block bg-gray-200 pt-3">
          <div className="w-full bg-white lg:px-16 px-2 py-8">
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

        {/* third section - category */}
        {/* <section className="h-fit w-full bg-gray-200 lg:px-10">
          <div className="w-full bg-white  rounded-lg px-6 py-10 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-5 grid-rows-10 gap-2">
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
        </section> */}


        {/* featured products section */}
        <section className="px-10 py-16 bg-gray-200 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
            featured
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
            {products.map((product) => {
              if (product.tags.includes("featured")) {
                return (
                  <div key={product?.id} className="group relative">
                    <PopularProductsCard product={product} />{" "}
                  </div>
                );
              }
            })}
          </div>

          {/* <div className="px-32">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 my-5"
          >
            Load More
          </Button>
        </div> */}
        </section>

        {/* marquee brand section */}
        <section className="bg-[#EEEEEE] py-16 px-0 shadow-2xl">
          <Marquee
            pauseOnHover={true}
            direction="right"
            className="bg-white py-2 rounded-sm shadow-xl"
          >
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-01.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-02.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-03.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-04.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-05.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-06.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-07.png"
            />
            <img
              className="mx-10 w-28 h-auto"
              src="../src/assets/brand-08.png"
            />
          </Marquee>
        </section>

        {/* popular products section */}
        <section className="px-10 py-16 bg-white">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
            our popular products
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
            {products?.map((product) => {
              if (product.tags.includes("popular")) {
                return (
                  <div key={product?.id} className="group relative">
                    <PopularProductsCard product={product} />{" "}
                  </div>
                );
              }
            })}
          </div>
        </section>

        {/* famous wrapper */}
        <section className="px-10 py-16 bg-white w-full">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
            famous products
          </h2>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-2 gap-5">
            {products.map((product) => {
              if (product.tags.includes("famous")) {
                return (
                  <div key={product?.id}>
                    {/* <FamousCard product={product} />  --- will see in future*/}
                    <PopularProductsCard product={product} />
                  </div>
                );
              }
            })}
          </div>
        </section>

        {/* blog section slider- npm react slick and card material tailwind card */}
        <section className="bg-gray-200 lg:p-10 p-6 px-3  ">
          <div className="flex justify-between">
            <h1 className="capitalize lg:text-xl text-2xl font-semibold">
              our latest news
            </h1>
            <div className="flex gap-1">
              <button
                onClick={previous}
                className="w-5 h-5 cursor-pointer hover:bg-black hover:text-white grid place-items-center rounded-full"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={next}
                className="w-5 h-5 cursor-pointer hover:bg-black hover:text-white grid place-items-center rounded-full"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="slider-container py-4">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </Slider>
          </div>
        </section>

        {/* special products - pending */}
      </div>
    </>
  );
}

export default Home;
