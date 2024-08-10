import React, { useEffect } from "react";
import CartCard from "../components/CartCard";
import { Button } from "@material-tailwind/react";
import HelmetTitle from "../components/HelmetTitle";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCartProduct, getCart } from "../features/cart/cartSlice";
import { toast ,Bounce} from 'react-toastify';

function AddToCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  // console.log(cart);

  const handleDeleteAllCartItems = () => {
    const deletePromise = dispatch(deleteAllCartProduct()).unwrap();
    deletePromise.then(() => {
      toast.info("Cart is empty", {
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

  const fetchCart = () => {
    dispatch(getCart());
  };

  const refreshCart = () => {
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <HelmetTitle title="Cart" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Cart" />
        <Button
          color="amber"
          className="px-3 py-2"
          onClick={handleDeleteAllCartItems}
        >
          clear cart
        </Button>
      </div>
      <main className="w-full lg:px-10 px-2 bg-[#F1F3F6] grid grid-cols-8 gap-6 py-6 md:grid-flow-col grid-flow-row">
        {/* First grid col */}
        <section className="col-span-8 lg:col-span-5 bg-white px-6 py-3 rounded-sm shadow-lg">
          {cart?.products?.map((item) => (
            <div>
              <CartCard item={item} refreshCart={refreshCart} />
            </div>
          ))}

          <Link to="/checkout" className="w-full text-right pt-5">
            <Button className="bg-[#FB641B] rounded-sm text-xl font-medium w-56">
              check out
            </Button>
          </Link>
        </section>
        {/* Second grid col */}
        <section className="h-fit col-span-8 lg:col-span-3 bg-white w-full rounded-sm shadow-lg py-5">
          <h1 className="text-gray-500 uppercase font-semibold px-4 pb-2 border-b">
            price details
          </h1>
          <div className="px-4 py-3 flex flex-col gap-4 border-b border-dotted">
            <div className="flex justify-between">
              <div>MRP ({cart?.products?.length} items)</div>
              <div>₹{cart?.cartTotal}</div>
            </div>
            <div className="flex justify-between">
              <div>Product Discount</div>
              <div className="text-[#388E3C] font-medium">-</div>
            </div>
            <div className="flex justify-between">
              <div>Coupons for you</div>
              <div className="text-[#388E3C] font-medium">-</div>
            </div>
            <div className="flex justify-between">
              <div>Delivery Fee</div>
              <div className="text-[#388E3C] font-medium">Free</div>
            </div>
          </div>
          <div className="flex justify-between px-4 py-4 border-b border-dotted">
            <div>Total Amount</div>
            <div>₹{cart?.cartTotal}</div>
          </div>
          <div className="px-4 pt-4 text-[#388E3C] font-semibold text-lg">
            You will save ₹488 on this order
          </div>
        </section>
      </main>
    </div>
  );
}

export default AddToCart;
