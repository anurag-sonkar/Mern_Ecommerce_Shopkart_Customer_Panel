import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <>
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
          <Route path='/whishlist' element={<Wishlist/>} />
          <Route path='/auth' element={<AuthenticationForm/>} />
          <Route path='/addtocart' element={<AddToCart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          {/* small screen auth handle */}
          <Route path='/signup' element={<SignupForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/reset-password' element={<ResetPassword/>} />


        </Route>

          <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App