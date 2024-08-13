import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ordersService from "./ordersService";

const initialState = {
    orders: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

// get all user orderdd product
export const getMyOrders = createAsyncThunk('orders/getMyOrders' , async(_ , thunkAPI)=>{
    try{
        return await ordersService.getMyOrders();
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMyOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMyOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload.response;
            })
            .addCase(getMyOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
            
            
    },
});


export default ordersSlice.reducer;
