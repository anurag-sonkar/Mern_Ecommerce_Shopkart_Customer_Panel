import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import RatingMUI from "./RatingMUI";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function CompareCard({ product }) {
  const info = product.info;
  // console.log(info);
  return (
    <Card className="lg:w-64 relative group flex lg:flex-col flex-row">
      <CardHeader shadow={false} floated={false} className="h-56">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-400"
        />

        <div className="absolute top-2 lg:-right-6 right-1 grid gap-3 transition-all duration-300 cursor-pointer group-hover:right-1">
          <div className="bg-orange-600 hover:bg-red-600 text-gray-950 font-semibold rounded-full grid place-items-center lg:p-1 md:p-1 p-0 transition-all duration-300 ">
            <IoClose color="black" className="hover:scale-125" />
          </div>
          <div className="bg-orange-600 hover:bg-red-600 text-gray-950 font-semibold rounded-full lg:grid place-items-center p-1 transition-all duration-300 hidden">
            <FaRegEye color="black" className="hover:scale-125" />
          </div>
          <div className="bg-orange-600 hover:bg-red-600 text-gray-950 font-semibold rounded-full lg:grid place-items-center p-1 transition-all duration-300 hidden">
            <IoCartOutline color="black" className="hover:scale-125" />
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <div>
          <Typography color="black" className="font-semibold">
            {product.name}
          </Typography>
        </div>

        <div className="mb-1 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Price
          </Typography>
          <div className="flex gap-2">
            <Typography className="font-semibold text-red-400">
              {product.price}
            </Typography>
            <Typography className="font-medium text-gray-500 line-through">
              {product.discountedPrice}
            </Typography>
          </div>
        </div>

        <div>
          {/* Other product details */}
          <div>
            {product.info &&
              Object.keys(product.info).map((key) => {
                if (key === "color") {
                  return (
                    <div key={key} className="flex justify-between capitalize">
                      <div className="font-semibold">{key}</div>
                      <div className="flex space-x-1 items-center">
                        {product.info[key].map((color) => (
                          <div
                            key={color}
                            className="lg:w-5 lg:h-5 h-3 w-3 rounded-full"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={key} className="flex justify-between capitalize lg:gap-0 md:gap-16 gap-6">
                      <div className="font-semibold">{key}</div>
                      <div className="min-w-16 text-right">{product.info[key]}</div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CompareCard;
