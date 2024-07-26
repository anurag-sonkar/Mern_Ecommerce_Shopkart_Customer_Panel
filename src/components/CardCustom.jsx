import React from "react";

function CardCustom({ img, subhead, head, desp }) {
    // console.log(img, subhead, head, desp )
  return (
    <div className="relative rounded-lg overflow-hidden lg:col-span-1 col-span-2 cursor-pointer transition-all ease-in-out duration-300 hover:scale-110 hover:z-10">
      <img src={img} className="h-full w-full object-cover" />
        <div className="absolute lg:top-12 lg:left-6 md:top-14 md:left-12 top-4 left-2">
            <p className="capitalize text-red-600 font-bold md:text-2xl">{subhead}</p>
            <p className="font-extrabold lg:text-xl text-sm md:text-3xl">{head}</p>
            <p className="text-gray-800 w-3/4 lg:text-sm md:text-2xl md:mt-4 text-xs">{desp}</p>
        </div>
    </div>
  );
}

export default CardCustom;
