import React, { useEffect, useRef } from "react";

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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BlogCard from "../components/BlogCard";
import PopularProductsCard from "../components/PopularProductsCard";
import { FamousCard } from "../components/FamousCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",

    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "../src/assets/tab.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];
function Home() {
  const dispatch = useDispatch();
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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

  return (
    <div className="">
      {/* first section */}
      <section className="grid grid-cols-4 grid-rows-2 gap-2 lg:px-8 px-2 py-8">
        <div className="lg:col-span-2 row-span-2 rounded-lg overflow-hidden col-span-4">
          {/* <img src={img} className='h-full w-full object-cover' /> */}
          <ImageCarousel name="Anuag" />
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

      {/* featured products section */}
      <section className="px-10 py-16 bg-gray-200 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
          featured 
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
          {products.map((product) => {
            if(product.tags.includes("featured") ){
              return <div key={product?.id} className="group relative">
              <PopularProductsCard product={product} />{" "}
            </div>
            }
          }
            
          )}
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

      {/* popular products section */}
      <section className="px-10 py-16 bg-white">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
          our popular products
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
          {products.map((product) => {
            if(product.tags.includes("popular") ){
              return <div key={product?.id} className="group relative">
              <PopularProductsCard product={product} />{" "}
            </div>
            }
          }
            
          )}
        </div>
      </section>

      {/* famous wrapper */}
      <section className="px-10 py-16 bg-white w-full">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
          famous products
        </h2>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-2 gap-5">
        {products.map((product) => {
            if(product.tags.includes("famous") ){
              return <div key={product?.id} >
              {/* <FamousCard product={product} />  --- will see in future*/}
              <PopularProductsCard product={product} />
            </div>
            }
          }
            
          )}
        
        
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
  );
}

export default Home;
