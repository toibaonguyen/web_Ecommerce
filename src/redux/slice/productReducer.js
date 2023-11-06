import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllProducts } from "@/services/productService";

export const renderProducts = createAsyncThunk(
  "products/renderProducts",
  async () => {
    try {
      let response = await getAllProducts();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    error: "",
    loading: false,
    productsArr: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderProducts.pending, (state) => {
        state.loading = true;
        state.productsArr = [];
        state.error = null;
      })
      .addCase(renderProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsArr = action.payload;
        state.error = null;
      })
      .addCase(renderProducts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
