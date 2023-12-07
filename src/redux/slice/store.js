import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = {
  product: productReducer,
  cart: cartReducer,
  category: categoryReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
