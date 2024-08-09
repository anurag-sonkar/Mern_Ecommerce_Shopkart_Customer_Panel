import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import enquiresService from './enquiresService';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};


export const createEnquire = createAsyncThunk('enquires/createEnquire', async (enquiry, thunkAPI) => {
    try {
    return await enquiresService.createEnquire(enquiry);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


const enquiresSlice = createSlice({
  name: 'enquires',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(createEnquire.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEnquire.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message
      })
      .addCase(createEnquire.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.message;
      })
     
  }
});

export default enquiresSlice.reducer;
