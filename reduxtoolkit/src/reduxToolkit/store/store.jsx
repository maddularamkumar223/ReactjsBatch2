import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";

let store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
