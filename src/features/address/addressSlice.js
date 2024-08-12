import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";

const initialState = {
    addresses: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

// 
export const createNewAddress = createAsyncThunk("cart/createNewAddress", async (formData, thunkAPI) => {
    try {
        return await addressService.createNewAddress(formData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// get all user cart product
export const getAllAddress = createAsyncThunk('cart/getAllAddress' , async(_ , thunkAPI)=>{
    try{
        return await addressService.getAllAddress();
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// delete item from cart
export const deleteAddress = createAsyncThunk('cart/deleteAddress' , async(id , thunkAPI)=>{
    try{
        return await addressService.deleteAddress(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// delete all items from cart
// export const deleteAllCartProduct = createAsyncThunk('cart/deleteAllCartProduct' , async(_ , thunkAPI)=>{
//     try{
//         return await addressService.deleteAllCartProduct();
//     }catch(error){
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// })



const cartSlice = createSlice({
    name: "addresses",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewAddress.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createNewAddress.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.addresses = action.payload.response;
            })
            .addCase(createNewAddress.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            .addCase(getAllAddress.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllAddress.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.addresses = action.payload.response;
                state.message = action.payload.message;
            })
            .addCase(getAllAddress.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            
            .addCase(deleteAddress.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.addresses = action.payload.response;
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            // .addCase(deleteAllCartProduct.pending, (state) => {
            //     state.isLoading = true;
            // })
            // .addCase(deleteAllCartProduct.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.isSuccess = true;
            //     state.addresses = [];
            // })
            // .addCase(deleteAllCartProduct.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.isError = true;
            //     state.message = action.payload.message;
            // })
            
    },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
