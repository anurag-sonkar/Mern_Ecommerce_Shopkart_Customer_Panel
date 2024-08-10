import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
    cart: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

// Add products to the cart
export const addToCart = createAsyncThunk("cart/addToCart", async (cartItems, thunkAPI) => {
    try {
        return await cartService.addToCart(cartItems);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// get all user cart product
export const getCart = createAsyncThunk('cart/getCart' , async(_ , thunkAPI)=>{
    try{
        return await cartService.getCart();
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// delete item from cart
export const deleteCartProduct = createAsyncThunk('cart/deleteCartProduct' , async(id , thunkAPI)=>{
    try{
        return await cartService.deleteCartProduct(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// delete all items from cart
export const deleteAllCartProduct = createAsyncThunk('cart/deleteAllCartProduct' , async(_ , thunkAPI)=>{
    try{
        return await cartService.deleteAllCartProduct();
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.cart = action.payload;
                console.log('Cart updated successfully:', action.payload); // Debugging
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
                console.error('Failed to update cart:', action.payload.message); // Debugging
            })
            .addCase(getCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.cart = action.payload.response;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            
            .addCase(deleteCartProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCartProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // state.cart = action.payload.response;
            })
            .addCase(deleteCartProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(deleteAllCartProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteAllCartProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.cart = [];
            })
            .addCase(deleteAllCartProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            
    },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
