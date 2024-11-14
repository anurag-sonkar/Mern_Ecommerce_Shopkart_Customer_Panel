import React, { useEffect, useState , lazy , Suspense } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const Contact = lazy(()=>import('./pages/Contact'))
const Error = lazy(()=>import('./pages/Error'))
const Store = lazy(()=>import('./pages/Store'))
const Blogs = lazy(()=>import('./pages/Blogs'))
const CompareProducts = lazy(()=>import('./pages/CompareProducts'))
const Wishlist = lazy(()=>import('./pages/Wishlist'))
const AuthenticationForm = lazy(() => import('./pages/Authentication/Auth/Auth'))
const SignupForm = lazy(() => import('./pages/Authentication/Signup/Signup'))
const LoginForm = lazy(() => import('./pages/Authentication/Login/Login'))
const ResetPassword = lazy(() => import('./pages/Authentication/ResetPassword'))
const ForgotPassword = lazy(() => import('./pages/Authentication/ForgotPassword'))
const SingleBlog = lazy(()=>import('./pages/SingleBlog'))
const SingleProduct = lazy(()=>import('./pages/SingleProduct'))
const AddToCart = lazy(()=>import('./pages/AddToCart'))
const Checkout = lazy(()=>import('./pages/Checkout'))
import ScrollToTop from "./components/ScrollToTop";
const PaymentSuccess = lazy(()=>import('./pages/PaymentSuccess'))
import ProtectedRoutes from "./pages/routing/ProtectedRoutes";
const Orders = lazy(()=>import('./pages/Orders'))
const MyAccount = lazy(()=>import('./pages/MyAccount'))
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
import LoadingPage from "./components/LoadingPage";

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

        <Suspense fallback={<LoadingPage/>}>

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
        </Suspense>
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
