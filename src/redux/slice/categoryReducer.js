import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCategorys } from "@/services/categoryService";

export const renderCategorys = createAsyncThunk(
  "categorys/renderCategorys",
  async () => {
    try {
      let response = await getAllCategorys();
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

export const categorysSlice = createSlice({
  name: "categorys",
  initialState: {
    error: "",
    loading: false,
    categorysArr: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(renderCategorys.pending, (state) => {
        state.loading = true;
        state.categorysArr = [];
        state.error = null;
      })
      .addCase(renderCategorys.fulfilled, (state, action) => {
        state.loading = false;
        state.categorysArr = action.payload;
        state.error = null;
      })
      .addCase(renderCategorys.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = action.error;
      });
  },
});

export default categorysSlice.reducer;
