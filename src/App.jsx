import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Store from './pages/Store'
import Blogs from './pages/Blogs'
import CompareProducts from './pages/CompareProducts'
import Wishlist from './pages/Wishlist'
import AuthenticationForm from "./pages/Authentication/Auth/Auth"
import SignupForm from './pages/Authentication/Signup/Signup'
import LoginForm from './pages/Authentication/Login/Login'
import ResetPassword from './pages/Authentication/ResetPassword'
import ForgotPassword from './pages/Authentication/ForgotPassword'
import SingleBlog from './pages/SingleBlog'
import SingleProduct from './pages/SingleProduct'
import AddToCart from './pages/AddToCart'
import Checkout from './pages/Checkout'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToTop from './components/ScrollToTop'
import PaymentSuccess from './pages/PaymentSuccess'
import { getCart } from './features/cart/cartSlice'
import ProtectedRoutes from './pages/routing/ProtectedRoutes'
import Orders from './pages/Orders'
import Profile from './pages/MyAccount'
import Address from './pages/Address'
import MyAccount from './pages/MyAccount'


function App() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {pathname} = useLocation() // will be on same page after reload page
 

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(() => {
  //   // console.log( user, isLoading, isError, isSuccess, message )
  //   if (user) {
  //     navigate(pathname);
  //     // navigate('/');
  //   } 
  // }, [dispatch,user]);

  
  // )
  // console.log(JSON.parse(localStorage.getItem('user'))?.result?.token)

 
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/product/:id' element={<SingleProduct/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/blog/:id' element={<SingleBlog/>} />
          <Route path='/compare-products' element={<CompareProducts/>} />
          <Route path='/whishlist' element={<ProtectedRoutes><Wishlist/></ProtectedRoutes>} />
          <Route path='/orders' element={<ProtectedRoutes><Orders/></ProtectedRoutes>} />
          <Route path='/myaccount' element={<ProtectedRoutes><MyAccount/></ProtectedRoutes>} />
          {/* <Route path='/address' element={<ProtectedRoutes><Address/></ProtectedRoutes>} /> */}
          <Route path='/auth' element={<AuthenticationForm/>} />
          <Route path='/addtocart' element={<ProtectedRoutes><AddToCart/></ProtectedRoutes> } />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
          {/* small screen auth handle */}
          <Route path='/signup' element={<SignupForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/reset-password/:token' element={<ResetPassword/>} />


        </Route>

          <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App