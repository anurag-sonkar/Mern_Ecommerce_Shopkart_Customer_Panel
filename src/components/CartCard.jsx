import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteCartProduct } from "../features/cart/cartSlice";
import { toast, Bounce } from "react-toastify";

function CartCard({ item, refreshCart }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item?.count || 0); // Ensure count is initialized properly

  const updateCounter = (operator) => {
    setCount((prev) => {
      let newCount;
      if (operator === "+") {
        newCount = prev + 1;
      } else if (operator === "-" && prev > 0) {
        newCount = prev - 1;
      } else {
        newCount = prev;
      }

      // Dispatch the action after state update
      const updatePromise = dispatch(
        addToCart({
          productId: item?.product._id,
          color: item?.color,
          count: newCount,
        })
      ).unwrap();

      updatePromise
        .then(() => {
          refreshCart();
        })
        .catch((error) => {
          alert(error);
        });
      return newCount;
    });
  };

  const handleProductDelete = () => {
    const deletePromise = dispatch(deleteCartProduct(item._id)).unwrap();
    deletePromise
      .then(() => {
        refreshCart();
      })
      .then(() => {
        toast.info("🦄 item removed", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="border-b py-4 grid grid-cols-6 lg:grid-flow-col grid-flow-row items-center gap-4 relative">
      <div className="col-span-2">
        <img
          src={item?.product?.images?.[0].url}
          className="lg:w-60 lg:min-h-40 md:w-60 md:min-h-40 w-28 h-24 object-contain"
          alt={item?.product?.title}
        />
      </div>

      <div className="col-span-4 flex flex-col gap-2">
        <div className="max-w-96 lg:text-sm text-xs">
          {item?.product?.title}
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold">${item?.price}</p>
          <p className="line-through text-blue-gray-400">$30</p>
          <p className="text-[#448E3C] font-semibold lg:text-lg text-xs">
            10% Off
          </p>
          <p className="bg-[#448E3C] text-white text-xs rounded-sm px-1 py-[2px] mx-6">
            Holi200
          </p>
          <p
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: item?.color }}
          >
            {/* {item?.color} */}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center col-span-6 lg:col-span-1">
        <div className="flex justify-center items-center px-0 rounded-xl">
          <div
            className="text-[#2874F0] text-2xl font-normal border bg-[#FAFAFA] px-2 rounded-sm cursor-pointer"
            onClick={() => updateCounter("-")}
          >
            -
          </div>
          <div type="text" className="w-10 text-2xl text-center px-2 border">
            {count}
          </div>
          <div
            className="text-[#2874F0] text-2xl font-normal border bg-[#FAFAFA] px-2 rounded-sm cursor-pointer"
            onClick={() => updateCounter("+")}
          >
            +
          </div>
        </div>
      </div>

      <span className="absolute top-2 right-0 w-3 h-3 cursor-pointer transition-all ease-in-out duration-200 shadow-2xl hover:scale-125">
        <img
          src="/assets/delete-icon.png"
          onClick={handleProductDelete}
        />
      </span>
    </div>
  );
}

export default CartCard;
