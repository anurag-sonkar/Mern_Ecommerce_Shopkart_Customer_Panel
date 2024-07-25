import React from "react";


const CartCountBadge = ({ size ,value}) => {
  return (
    <div className={`bg-red-500 text-gray-950 font-semibold absolute rounded-full ${size} text-[14px] right-2 -top-1 grid place-items-center`}>
      {value}
    </div>
  );
};

export default CartCountBadge;
