import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./../slice/CurdSlice";

let Store = configureStore({
  reducer: {
    curd: crudSlice,
  },
});
export default Store;
