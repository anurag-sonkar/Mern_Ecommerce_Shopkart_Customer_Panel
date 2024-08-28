import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast, Bounce } from "react-toastify";
import wishlistService from './wishlistService';


const initialState = {
  wishlist:[],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};


export const getWishlist = createAsyncThunk('auth/getWishlist' , async(_,thunkAPI) =>{
  try {
      return await wishlistService.getWishlist()
  } catch (error) {
      return thunkAPI.rejectWithValue(error)
      
  }
})


export const addToWishlist = createAsyncThunk('products/addToWishlist', async (id, thunkAPI) => {
  try {
    return await wishlistService.addToWishlist(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});




const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending,(state)=>{
        state.isLoading = true
    })
    .addCase(getWishlist.fulfilled,(state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.wishlist = action.payload.response.wishlist
        state.message = action.payload.message
    })
    .addCase(getWishlist.rejected,(state,action)=>{
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.wishlist = {}
        state.message = action.payload.message
    })
      .addCase(addToWishlist.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlist = action.payload.response.wishlist;
        state.message = action.payload.message;

        if(state.isSuccess){
          toast.info(`${state.message}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
        if(state.isError){
          toast.error(`${state.message || "error occured"}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      })
      
  }
});

export default wishlistSlice.reducer;
