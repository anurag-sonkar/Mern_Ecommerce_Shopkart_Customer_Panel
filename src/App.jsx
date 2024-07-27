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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/compare-products' element={<CompareProducts/>} />
          <Route path='/whishlist' element={<Wishlist/>} />

        </Route>

          <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App