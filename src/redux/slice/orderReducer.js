import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCartProducts } from "@/services/cartService";

export const renderCartProducts = createAsyncThunk(
  "carts/renderCartProducts",
  async (userId) => {
    try {
      let response = await getCartProducts(userId);
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

export const cartReducer = createSlice({
  name: "carts",
  initialState: {
    error: "",
    loading: false,
    cartProductsArr: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderCartProducts.pending, (state) => {
        state.loading = true;
        state.cartProductsArr = [];
        state.error = null;
      })
      .addCase(renderCartProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.cartProductsArr = action.payload;
        state.error = null;
      })
      .addCase(renderCartProducts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default cartReducer.reducer;
