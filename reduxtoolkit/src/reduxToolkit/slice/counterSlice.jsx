import { createSlice } from "@reduxjs/toolkit";

let initialState = 0;
let counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state) {
      return state + 1;
    },
    sub(state) {
      return state - 1;
    },
  },
});

export let { add, sub } = counterSlice.actions;
export default counterSlice.reducer;
