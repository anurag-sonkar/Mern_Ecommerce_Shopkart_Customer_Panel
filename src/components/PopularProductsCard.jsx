import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import RatingMUI from "./RatingMUI";
import { FcLike } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { IoMdHeart } from "react-icons/io";
import { toast, Bounce } from "react-toastify";

function PopularProductsCard({ product }) {
  const [toggleWishlist, setToggleWishlist] = useState(false);
  const dispatch = useDispatch();

  const { wishlist, message } = useSelector((state) => state.products);

  const handleWishlistClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const addWishlistPrmoise = dispatch(addToWishlist(product?._id)).unwrap();
    toast.promise(
      addWishlistPrmoise,
      {
        pending: "loading...",
        success: `${message && message} ` || "whishlist",
        error: `${message && message}` || "error occurred",
      },
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };

  // Function to extract the first 10 words from a string
  const extractWords = (text) => {
    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Slice the first 10 words
    const first10Words = words.slice(0, 10);

    // Join the words back into a string
    return first10Words.join(" ");
  };

  return (
    <Link to={`/product/${product._id}`}>
      <Card className="w-64 relative group">
        <CardHeader shadow={false} floated={false} className="h-56">
          <img
            src={product.images[0].url}
            alt={product.imageAlt}
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-400"
          />
          {/* add to wishlist + discount show */}
          <div className="absolute top-0 left-0 flex justify-between items-center w-full p-1">
            <div className="bg-orange-800 rounded-3xl text-[10px] text-white px-[4px]">
              -33%
            </div>
            <div onClick={handleWishlistClick}>
              <IoMdHeart size={22} color="crimson" />
              {/* <FcLike size={20} color="white"/> */}
            </div>
          </div>

          <div className="absolute top-12 lg:-right-6 right-1 grid gap-3 transition-all duration-300 cursor-pointer group-hover:right-1">
            <div className="bg-orange-600 hover:bg-red-600 text-gray-950 font-semibold rounded-full grid place-items-center p-1 transition-all duration-300">
              <FaRegEye color="black" className="hover:scale-125" />
            </div>
            <div className="bg-orange-600 hover:bg-red-600 text-gray-950 font-semibold rounded-full grid place-items-center p-1 transition-all duration-300">
              <TbArrowsCross color="black" className="hover:scale-125" />
            </div>
            <div className="bg-orange-600 hover:bg-red-600 text-gray-950 font-semibold rounded-full grid place-items-center p-1 transition-all duration-300">
              <IoCartOutline color="black" className="hover:scale-125" />
            </div>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-2">
          <div className="mb-1 flex items-center justify-between">
            <Typography color="blue-gray" className="leading-4 font-semibold">
              {extractWords(product?.title)}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              <span className="font-semibold text-[#448E3C]">
                ${product.price}
              </span>
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-xs"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `${extractWords(
                  product?.description
                )} <a href="#read-more" class="text-red-600 font-bold">Read more...</a>`,
              }}
            />
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-xs"
          >
            <RatingMUI />
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter> */}
      </Card>
    </Link>
  );
}

export default PopularProductsCard;
