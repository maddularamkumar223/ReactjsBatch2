import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/ProductSlice";

let store = configureStore({
  reducer: {
    product: productSlice,
  },
});
export default store;
