import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice";
import productsReducers from "../features/products/productSlice";
import cartReducers from "../features/cart/cartSlice"
export const store = configureStore({
    reducer: {
      auth: authReducer,
    products: productsReducers,
    cart : cartReducers,

    },
  });