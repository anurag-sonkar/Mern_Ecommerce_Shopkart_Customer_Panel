import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import AuthenticationForm from "./pages/Authentication/Auth/Auth";
import SignupForm from "./pages/Authentication/Signup/Signup";
import LoginForm from "./pages/Authentication/Login/Login";
import ResetPassword from "./pages/Authentication/ResetPassword";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProtectedRoutes from "./pages/routing/ProtectedRoutes";
import Orders from "./pages/Orders";
import MyAccount from "./pages/MyAccount";
import {
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { FloatButton, Switch } from "antd";
import { RxHome } from "react-icons/rx";
import { IoStorefrontOutline } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdContacts } from "react-icons/io";

import { FaOpencart } from "react-icons/fa";
import { Button } from 'antd';

function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [imageSrc, setImageSrc] = useState(null);

  const isActive = (path) => location.pathname === path;

  const checkNetworkStatus = () =>{
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () =>setIsOnline(false);

    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


  }
  
  useEffect(() => {
    checkNetworkStatus()
    // const handleOnline = () => setIsOnline(true);
    // const handleOffline = () =>setIsOnline(false);

    
    // window.addEventListener("online", handleOnline);
    // window.addEventListener("offline", handleOffline);

    // // Cleanup the event listeners on component unmount
    // return () => {
    //   window.removeEventListener("online", handleOnline);
    //   window.removeEventListener("offline", handleOffline);
    // };
  }, []);


  useEffect(
    ()=>{
      const savedImage = localStorage.getItem("offline-image");
        if (savedImage) {
          setImageSrc(savedImage);
        }

    }
    ,[isOnline]
  )

  if(isOnline){
    return (
      <>
      <ScrollToTop />

      <div>
        <FloatButton
          shape="circle"
          type="primary"
          style={{
            insetInlineEnd: 94,
          }}
          icon={<FaOpencart size={22} />}
          onClick={() => navigate("/addtocart")}
        />
      </div>

      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <FloatButton.Group
          open={open}
          shape="square"
          type="primary"
          trigger="click"
          style={{
            insetInlineEnd: 34,
          }}
          icon={<AppstoreAddOutlined />}
        >
          {/* Apply a conditional active style based on the current location */}
          <FloatButton
            icon={<RxHome />}
            onClick={() => navigate("/")}
            style={{
              backgroundColor: isActive("/") ? "#1890ff" : "white", // Active color
              color: isActive("/") ? "white" : "black", // Change icon color
            }}
          />
          <FloatButton
            icon={<IoStorefrontOutline />}
            onClick={() => navigate("/store")}
            style={{
              backgroundColor: isActive("/store") ? "#1890ff" : "white",
              color: isActive("/store") ? "white" : "black",
            }}
          />
          <FloatButton
            icon={<LiaBlogSolid />}
            onClick={() => navigate("/blogs")}
            style={{
              backgroundColor: isActive("/blogs") ? "#1890ff" : "white",
              color: isActive("/blogs") ? "white" : "black",
            }}
          />
          <FloatButton
            icon={<IoMdContacts />}
            onClick={() => navigate("/contact")}
            style={{
              backgroundColor: isActive("/contact") ? "#1890ff" : "white",
              color: isActive("/contact") ? "white" : "black",
            }}
          />
        </FloatButton.Group>
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/compare-products" element={<CompareProducts />} />
          <Route
            path="/whishlist"
            element={
              <ProtectedRoutes>
                <Wishlist />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/myaccount"
            element={
              <ProtectedRoutes>
                <MyAccount />
              </ProtectedRoutes>
            }
          />
          {/* <Route path='/address' element={<ProtectedRoutes><Address/></ProtectedRoutes>} /> */}
          <Route path="/auth" element={<AuthenticationForm />} />
          <Route
            path="/addtocart"
            element={
              <ProtectedRoutes>
                <AddToCart />
              </ProtectedRoutes>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
          {/* small screen auth handle */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
    )
  }

  else{
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-white">
            <div className="flex flex-col justify-center items-center gap-4">
              <img src={imageSrc} className="object-contain w-64 h-auto"/>
              <p className="text-lg font-medium">You appear to be offline</p>
              <p className="text-xs text-gray-500">You can't use Shopkart until you're connected to the internet</p>
              <Button type="primary" onClick={checkNetworkStatus} className="min-w-24">Retry</Button>
            </div>
        </div>
    )
  }

}

export default App;
