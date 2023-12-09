import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAllProducts,
  getProductsByCategory,
  getProductsById,
} from "@/services/productService";

export const renderProducts = createAsyncThunk(
  "products/renderProducts",
  async () => {
    try {
      let response = await getAllProducts();
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

export const renderProsByCategory = createAsyncThunk(
  "products/renderProsByCategory",
  async (categoryId) => {
    try {
      let response = await getProductsByCategory(categoryId);
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

export const renderProsById = createAsyncThunk(
  "products/renderProsById",
  async (productId) => {
    try {
      let response = await getProductsById(productId);
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

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    error: "",
    loading: false,
    productsArr: [],
    prosByCateArr: [],
    proDetail: [],
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
      })
      .addCase(renderProsByCategory.pending, (state) => {
        state.loading = true;
        state.prosByCateArr = [];
        state.error = null;
      })
      .addCase(renderProsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.prosByCateArr = action.payload;
        state.error = null;
      })
      .addCase(renderProsByCategory.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      })
      .addCase(renderProsById.pending, (state) => {
        state.loading = true;
        state.proDetail = [];
        state.error = null;
      })
      .addCase(renderProsById.fulfilled, (state, action) => {
        state.loading = false;
        state.proDetail = action.payload;
        state.error = null;
      })
      .addCase(renderProsById.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
