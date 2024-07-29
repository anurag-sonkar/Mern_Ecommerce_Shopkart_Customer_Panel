import React from "react";
import CartCard from "../components/CartCard";
import { Button } from "@material-tailwind/react";
import HelmetTitle from "../components/HelmetTitle";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function AddToCart() {
  

  return (
    <div>
    <HelmetTitle title="Cart" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Cart" />
      </div>

        <main className="w-full lg:px-10 px-2 bg-[#F1F3F6] grid grid-cols-8 gap-6 py-6 md:grid-flow-col grid-flow-row">
      {/* First grid col */}
      <section className="col-span-8 lg:col-span-5 bg-white px-6 py-3 rounded-sm shadow-lg">
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <Link to="/checkout" className="w-full text-right pt-5">
            <Button className="bg-[#FB641B] rounded-sm text-xl font-medium w-56" >check out</Button>
            
        </Link>
      </section>
      {/* Second grid col */}
      <section className="h-fit col-span-8 lg:col-span-3 bg-white w-full rounded-sm shadow-lg py-5">
        <h1 className="text-gray-500 uppercase font-semibold px-4 pb-2 border-b">price details</h1>
        <div className="px-4 py-3 flex flex-col gap-4 border-b border-dotted">
            <div className="flex justify-between">
                <div>MRP (10 items)</div>
                <div>₹1,318</div>
            </div>
            <div className="flex justify-between">
                <div>Product Discount</div>
                <div className="text-[#388E3C] font-medium">-₹139</div>
            </div>
            <div className="flex justify-between">
                <div>Coupons for you</div>
                <div className="text-[#388E3C] font-medium">-₹80</div>
            </div>
            <div className="flex justify-between">
                <div>Delivery Fee</div>
                <div className="text-[#388E3C] font-medium">Free</div>
            </div>
        </div>
            <div className="flex justify-between px-4 py-4 border-b border-dotted">
                <div>Total Amount</div>
                <div>₹839</div>
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
