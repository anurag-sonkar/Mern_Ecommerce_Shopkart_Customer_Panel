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

function PopularProductsCard({ product }) {
  const [toggleWishlist, setToggleWishlist] = useState(false);

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="w-64 relative group">
      <CardHeader shadow={false} floated={false} className="h-56">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-400"
        />

        <div className="absolute top-0 left-0 flex justify-between w-full p-2">
          <div className="bg-orange-800 rounded-3xl text-[10px] text-white px-[4px]">
            -33%
          </div>
          <div>
            <FcLike />
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
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {product.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-xs"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
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
