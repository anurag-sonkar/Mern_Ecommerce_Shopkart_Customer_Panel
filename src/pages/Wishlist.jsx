import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../features/wishlist/wishlistSlice";
import { toast, Bounce } from "react-toastify";
import { CardWishlist } from "../components/CardWishlist";
import { Skeleton } from "antd";

export default function Wishlist() {
  const dispatch = useDispatch();
  const { wishlist, isLoading } = useSelector((state) => state.wishlist);

  const fetchWishlist = () => {
    const fetchPromise = dispatch(getWishlist()).unwrap();
    toast.promise(
      fetchPromise,
      {
        pending: "Fetching...",
        success: "Items in your wishlist",
        error: "Error fetching wishlist",
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
  useEffect(() => {
    fetchWishlist();
  }, [dispatch]);

  return (
    <div className="bg-[#F1F3F6] lg:px-8 md:px-8 px-3 py-5">
      <div className="bg-white ">
        <div className="px-8 py-5">
          <h1 className="text-2xl font-semibold">
            My Wishlist ({wishlist?.length})
          </h1>
        </div>

        <hr></hr>
        
        {!isLoading && wishlist ? (
          wishlist.length > 0 ? (
            <div className="px-8 py-5">
            {wishlist.map((list) => (
              <div key={list?._id}>
                <CardWishlist {...list} />
                <hr></hr>
              </div>
            ))}
          </div>
          ) : <div className="flex flex-col justify-center items-center py-10 gap-6">
          <img src="/assets/empty-wishlist.png" />
          <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-xl font-bold">Empty Wishlist</p>
          <p className="font-extralight lg:text-lg md:text-lg text-sm">You have no items in your wishlist. Start adding!</p>
          </div>
          </div>
          
        ) : (
          <div className="flex flex-col gap-2 lg:px-8 md:px-8 px-2 py-4">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <Skeleton.Input
                  active="true"
                  block="false"
                  style={{ height: "28vh" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
