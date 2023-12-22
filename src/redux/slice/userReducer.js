import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressById } from "@/services/userService";

export const renderAddress = createAsyncThunk(
  "user/renderAddress",
  async (userId) => {
    try {
      let response = await getAddressById(userId);
      if (response.status === 200) {
        return response.data;
      } else {
        return -1;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const userReducer = createSlice({
  name: "user",
  initialState: {
    error: "",
    loading: false,
    addressArr: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderAddress.pending, (state) => {
        state.loading = true;
        state.addressArr = [];
        state.error = null;
      })
      .addCase(renderAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addressArr = action.payload;
        state.error = null;
      })
      .addCase(renderAddress.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default userReducer.reducer;
