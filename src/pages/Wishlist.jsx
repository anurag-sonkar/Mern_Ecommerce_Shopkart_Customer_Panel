import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishlist } from '../features/auth/authSlice'
import { toast, Bounce } from "react-toastify";
import { CardWishlist } from '../components/CardWishlist';

export default function Wishlist() {
  const dispatch = useDispatch()
  const { wishlist, message } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchWishlist();
  }, [dispatch]);

  const fetchWishlist = () => {
    const fetchPromise = dispatch(getWishlist()).unwrap();
    toast.promise(
      fetchPromise,
      {
        pending: "Fetching...",
        success: message || "Items in your wishlist",
        error: message || "Error fetching wishlist",
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

  const refreshWishlist = () => {
    fetchWishlist();
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <div className='grid grid-cols-4'>
        {
          wishlist && wishlist.length > 0 && wishlist.map((list) => (
            <div key={list._id}>
              <CardWishlist {...list} refreshWishlist={refreshWishlist} />
            </div>
          ))
        }
      </div>
    </div>
  )
}


