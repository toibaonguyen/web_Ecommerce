import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCartProducts } from "@/services/cartService";
import { resolve } from "styled-jsx/css";

export const renderCartProducts = createAsyncThunk(
  "carts/renderCartProducts",
  async (userId) => {
    try {
      // return new Promise(async (resolve, reject) => {
      //   let response = await getCartProducts(userId);
      //   try {
      //     resolve(response);
      //   } catch (error) {
      //     reject(error);
      //   }
      // });

      let response = await getCartProducts(userId);
      await new Promise((resolve) => {
        console.log("response: ");
        resolve(response.data);
        // console.log(response.data);
      });
      return response.data.data;

      // console.log(response);
      // if (response.errCode === 0) {
      //   // return response.data;
      // } else {
      //   alert(response.message);
      //   console.log(response);
      // }
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
