import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function OrderCard({ order, orderedAt }) {
  const navigate = useNavigate();
  console.log(order)
  function formatOrderDate(orderDate) {
    const dateStr = orderDate;
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, "0"); // ensures two-digit day
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const year = String(date.getFullYear()).slice(-2); // last two digits of the year

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate; // "13 Aug 24"
  }

  // Function to extract the first 10 words from a string
  const extractWords = (text) => {
    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Slice the first 10 words
    const first10Words = words.slice(0, 10);

    // Join the words back into a string
    return first10Words.join(" ");
  };

  // handleRateReviewClick

  const handleRateReviewClick = (e)=>{
    e.preventDefault()
    navigate(`/product/${order?.product?._id}`, { state: { scrollToReview: true } });
  }

  return (
      <div className="grid grid-cols-5 px-6 py-5 bg-white shadow-2xl border-2 border-blue-600 rounded-md">
      {/* title- img col */}
      <div className="flex gap-2 lg:col-span-2 md:col-span-2 col-span-4">
        <img
          src={order?.product?.images?.[0]?.url}
          className="w-24 h-24 object-contain"
        />
        <div className="flex flex-col gap-1 lg:justify-normal md:justify-normal justify-center">
          <h1 className="font-bold">{extractWords(order?.product?.title)}.....</h1>
          <div className="flex gap-3 items-center">
            <div className="text-gray-400 font-semibold">Color:</div>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: `${order?.color}` }}
            ></div>
          </div>
        </div>
      </div>

      {/* price col */}
      <div className="text-center lg:block flex justify-center items-center lg:text-lg text-xl">
        <div className="font-semibold">${order?.price}</div>
      </div>

      {/* info col */}
      <div className="lg:col-span-2 md:col-span-2 col-span-5 lg:block md:block sm:flex w-full lg:text-left md:text-left text-center">
        <div className="flex items-center gap-2 font-semibold lg:justify-normal md:justify-normal justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full"> </div>Ordered at{" "}
          {formatOrderDate(orderedAt)}
        </div>
        <div className="text-sm">Your item has been delivered</div>
        <div  onClick={(e)=>handleRateReviewClick(e)} className="text-blue-600 font-semibold hover:underline underline-offset-8">
          ⭐ rate & review product
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
