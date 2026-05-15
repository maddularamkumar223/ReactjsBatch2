import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import cartSlice from "../slice/cartSlice";

let store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
});
export default store;
