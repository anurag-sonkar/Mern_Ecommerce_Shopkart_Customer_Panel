import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice";
import productsReducers from "../features/products/productSlice";
import cartReducers from "../features/cart/cartSlice"
import addressReducers from "../features/address/addressSlice"
import ordersReducers from "../features/orders/ordersSlice"
import wishlistReducers from "../features/wishlist/wishlistSlice"

export const store = configureStore({
    reducer: {
      auth: authReducer,
    products: productsReducers,
    cart : cartReducers,
    address : addressReducers,
    orders : ordersReducers,
    wishlist : wishlistReducers

    },
  });