import React from "react";
import { IoMdHeart } from "react-icons/io";
import { toast, Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

export function FamousCard({ product }) {
  const dispatch = useDispatch();
  const { wishlist, message } = useSelector((state) => state.wishlist);

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
    return first10Words.join(' ');
  };

  return (
    <Link to={`/product/${product._id}`}>
    <div className="max-w-xs mx-auto w-64 flex flex-col h-full">
      <div className="bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full relative">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-64 object-contain"
            src={product?.images?.[0]?.url}
            alt="product image"
          />
        </a>
        {/* Add to wishlist + discount show */}
        <div className="absolute top-0 left-0 flex justify-between items-center w-full px-4 py-2">
          <div className="bg-orange-800 rounded-3xl text-[10px] text-white px-[4px]">
            -33%
          </div>
          <div onClick={handleWishlistClick}>
            <IoMdHeart size={22} color="crimson" />
          </div>
        </div>
        
        <div className="px-4 py-2 flex-grow">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-lg leading-5 tracking-tight dark:text-white">
              {extractWords(product?.title)}
            </h3>
          </a>
          {/* <p className="text-xs">{product?.description}</p> */}
          <div className="pt-2">
            <p className="text-xs" dangerouslySetInnerHTML={{
                __html: `${extractWords(
                  product?.description
                )} <a href="#read-more" class="text-red-600 font-bold">Read more...</a>`,
              }} />
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>

        <div className="flex justify-between px-4 py-2 ">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product?.price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
    </Link>
  );
}
