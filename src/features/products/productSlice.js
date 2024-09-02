import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productsService from './productsService';
import { toast, Bounce } from "react-toastify";


const initialState = {
  products: [],
  product : {},
  filteredProducts :[],
  wishlist:[],
  productReview :{},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};

export const getAllFilterProducts = createAsyncThunk('products/getAllFilterProducts', async (data, thunkAPI) => {
  try {
    return await productsService.getAllFilterProducts(data);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkAPI) => {
  try {
    return await productsService.getAllProducts();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const getProduct = createAsyncThunk('products/getProduct', async (id, thunkAPI) => {
  try {
    return await productsService.getProduct(id);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// export const addToWishlist = createAsyncThunk('products/addToWishlist', async (id, thunkAPI) => {
//   try {
//     return await productsService.addToWishlist(id);
//   } catch (error) {
//     const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

export const addProductReview = createAsyncThunk('products/addProductReview', async (data, thunkAPI) => {
  try {
    return await productsService.addProductReview(data);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFilterProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFilterProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredProducts = action.payload.response;
        // state.message = action.payload.message;
      })
      .addCase(getAllFilterProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.response;
        // state.message = action.payload.message;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getProduct.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload.response;
        state.message = action.payload.message;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // state.message = action.payload.message;
      })
      // .addCase(addToWishlist.pending, (state) => {
      //   state.message = "";
      //   state.isLoading = true;
      // })
      // .addCase(addToWishlist.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.wishlist = action.payload.response.wishlist;
      //   state.message = action.payload.message;

      //   if(state.isSuccess){
      //     toast.info(`${state.message}`, {
      //       position: "top-center",
      //       autoClose: 2000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "dark",
      //       transition: Bounce,
      //       });
      //   }
      // })
      // .addCase(addToWishlist.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.isSuccess = false;
      //   state.message = action.payload.message;
      //   if(state.isError){
      //     toast.error(`${state.message || "error occured"}`, {
      //       position: "top-center",
      //       autoClose: 2000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "dark",
      //       transition: Bounce,
      //       });
      //   }
      // })
      .addCase(addProductReview.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(addProductReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(addProductReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
      
  }
});

export default productsSlice.reducer;
