import { createSlice } from "@reduxjs/toolkit";
import { createTask } from "../apiCalls/CrudApi";

let initialState = {
  loading: false,
  tasks: [],
  message: " ",
};
let crudSlice = createSlice({
  name: "curdSlice",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default crudSlice.reducer;
