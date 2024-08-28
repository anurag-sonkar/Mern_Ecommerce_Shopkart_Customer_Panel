import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlist } from '../features/wishlist/wishlistSlice'
import { toast, Bounce } from "react-toastify";
import { CardWishlist } from '../components/CardWishlist';

export default function Wishlist() {
  const dispatch = useDispatch()
  const { wishlist } = useSelector((state) => state.wishlist);
  

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
  }
  useEffect(() => {
    fetchWishlist();
  }, [dispatch]);
  

  return (
    <div className='bg-[#F1F3F6] lg:px-8 md:px-8 px-4 py-5'>
      <div className='bg-white '>
        <div className='px-8 py-5'>
        <h1 className='text-2xl font-semibold'>My Wishlist (42)</h1>
        </div>
        <hr></hr>
        <div className='px-8 py-5' >
          {
            wishlist && wishlist.length >= 0 && wishlist.map((list)=><div key={list?._id} ><CardWishlist {...list}  /><hr></hr></div>)
          }
        </div>



      </div>
    </div>
  )
}


