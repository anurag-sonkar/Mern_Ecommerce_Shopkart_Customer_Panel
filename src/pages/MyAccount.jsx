import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { PiPowerBold } from "react-icons/pi";
import Address from "./Address";
import MyReviews from "./MyReviews";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/auth/authSlice";
import { toast, Bounce } from "react-toastify";
import ForgotPassword from "./Authentication/ForgotPassword";
import { MdKeyboardArrowRight } from "react-icons/md";

function MyAccount() {
  // const {pathname} = useLocation()
  const [component, setComponent] = useState("/profile");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(
    user?.imgpath?.url || "../src/assets/profile-fallback.svg"
  );

  const handleLogout = ()=>{
    const signOutPromise = dispatch(signOut()).unwrap();
    toast.promise(
      signOutPromise,
      {
        pending: "Sigining out...",
        success: "Sigining out successfully!",
        error: `Signout failed!`,
      },
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );

    signOutPromise.then(() => {
      
      navigate("/");
    });
  }

  return (
    <div className="lg:px-10 md:px-10 px-2 py-5 grid grid-col-12 lg:grid-flow-col md:grid-flow-col grid-flow-row gap-4  bg-gray-100 min-h-screen">
      {/* first col - for lg,md */}
      <div className="rounded-sm lg:grid md:grid gap-3 h-fit hidden">
        {/* first col - first row */}
        <div className="bg-white flex px-4 py-2 gap-4 items-center">
          <div>
            <img
              src={profile}
              className="w-12 h-12 rounded-full object-cover border-2"
            />
          </div>
          <div>
            <p className="text-sm">Hello,</p>
            <p className="font-semibold">{user?.name}</p>
          </div>
        </div>
        {/* first col - second row */}
        <div className="bg-white px-4 py-2">
          {/* my order */}
          <Link
            to="/orders"
            className="grid grid-flow-col items-center py-2 border-b-2"
          >
            <div className="flex gap-5">
              <img src="../src/assets/order.svg" />
              <div className="uppercase text-gray-600 font-semibold text-left cursor-pointer hover:text-[#2874F0] transition-all ease-in-out">
                my orders
              </div>
            </div>
            <div className="grid place-items-end w-full">
              <IoIosArrowForward />
            </div>
          </Link>

          {/* Account settings */}
          <div className=" py-2 border-b-2">
            <div className="flex gap-5 py-2">
              <img src="../src/assets/order-user.svg" />
              <div className="uppercase text-gray-600 font-semibold text-left cursor-pointer hover:text-[#2874F0] transition-all ease-in-out">
                account settings
              </div>
            </div>

            <div className="capitalize">
              <Link
                onClick={() => setComponent("/profile")}
                className="block px-12 py-2 hover:bg-[#F5FAFF] hover:text-[#2874F0]"
                style={{
                  backgroundColor: `${
                    component === "/profile" ? "#F5FAFF" : ""
                  }`,
                }}
              >
                profile information
              </Link>
              <Link
                onClick={() => setComponent("/address")}
                className="block px-12 py-2 hover:bg-[#F5FAFF] hover:text-[#2874F0]"
                style={{
                  backgroundColor: `${
                    component === "/address" ? "#F5FAFF" : ""
                  }`,
                }}
              >
                manage addresses
              </Link>
              <Link
                onClick={() => setComponent("/change-password")}
                className="block px-12 py-2 hover:bg-[#F5FAFF] hover:text-[#2874F0]"
                style={{
                  backgroundColor: `${
                    component === "/change-password" ? "#F5FAFF" : ""
                  }`,
                }}
              >
                change password
              </Link>
            </div>
          </div>

          {/* my stuff */}
          <div className=" py-2 border-b-2">
            <div className="flex gap-5 py-2">
              <img src="../src/assets/order-mystuff.svg" />
              <div className="uppercase text-gray-600 font-semibold text-left cursor-pointer hover:text-[#2874F0] transition-all ease-in-out">
                my stuff
              </div>
            </div>

            <div className="capitalize">
              <Link
                to="/whishlist"
                className="block px-12 py-2 hover:bg-[#F5FAFF] hover:text-[#2874F0]"
              >
                my wishlist
              </Link>
            </div>
          </div>

          {/* logout */}
          <div className="flex gap-5 py-2 items-center">
            <div><PiPowerBold color="blue" size={25} /></div>
            <button onClick={handleLogout} className="block w-full py-3 capitalize text-gray-600 font-semibold text-left cursor-pointer hover:text-[#2874F0] transition-all ease-in-out">
              logout
            </button>
          </div>
        </div>
        {/* first col - third row*/}
        <div className="bg-white px-4 py-2 capitalize grid gap-2">
          <h1 className="font-semibold ">frequency visited:</h1>
          <div className="flex text-sm text-gray-500 gap-4">
            <Link to="" className="text-xs block">
              track order
            </Link>
            <Link to="" className="text-xs block">
              help center
            </Link>
          </div>
        </div>
      </div>

      {/* first col - for sm */}
      <div className="col-span-8 px-4 py-6 lg:hidden md:hidden grid grid-cols-2 rounded-md shadow-2xl place-items-center gap-4">
      <div className="col-span-2 w-full h-full min-h-12">
          <div className="">
          <div className="text-lg font-bold">Hey! Anurag Sonkar</div>
          <div className="flex items-center">
          <Link to="/" className="text-gray-500">Explore </Link>
          <MdKeyboardArrowRight/>
          </div>
          </div>
      </div>
          <Link to='/orders' className="border-[1px] border-blue-300 rounded-md flex items-center gap-3 w-full h-full px-6 py-2 shadow-md">
            <img  src="../src/assets/orders.png" className="w-5 h-5"/>
            <div className="font-semibold">Orders</div>
          </Link>
          <div className="border-[1px] border-blue-300 rounded-md flex items-center gap-3 w-full h-full px-6 py-2 shadow-md" onClick={() => setComponent("/profile")}>
            <img  src="../src/assets/account.png" className="w-5 h-5"/>
            <div className="font-semibold">Account</div>
            
          </div>
          <div className="border-[1px] border-blue-300 rounded-md flex items-center gap-3 w-full h-full px-6 py-2 shadow-md" onClick={() => setComponent("/address")}>
            <img  src="../src/assets/address.png" className="w-5 h-5"/>
            <div className="font-semibold">Address</div>
          </div>
          <Link to='/whishlist' className="border-[1px] border-blue-300 rounded-md flex items-center gap-3 w-full h-full px-6 py-2 shadow-md">
            <img  src="../src/assets/heart.png" className="w-5 h-5"/>
            <div className="font-semibold">Wishlist</div>
          </Link>
          
          
      </div>

      {/* second-col  - if profile */}
      {component === "/profile" && (
        <div className="col-span-8 bg-white shadow-xl rounded-sm px-6">
          <Profile />
        </div>
      )}

      {/* second col - if address*/}
      {component === "/address" && (
        <div className="col-span-8 bg-white shadow-xl rounded-sm px-6">
          <Address />
        </div>
      )}

      {/* second col - if chnage password*/}
      {component === "/change-password" && (
        <div className="col-span-8 bg-white shadow-xl rounded-sm px-6">
          <ForgotPassword />
        </div>
      )}

      
    </div>
  );
}

export default MyAccount;
