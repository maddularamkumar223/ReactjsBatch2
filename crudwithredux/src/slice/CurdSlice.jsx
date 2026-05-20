import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteData, fetchTasks } from "../apiCalls/CrudApi";

let initialState = {
  loading: false,
  tasks: [],
  message: "",
  status: "",
};
let crudSlice = createSlice({
  name: "curdSlice",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      // ! Create The Task
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.tasks.push(action.meta.arg);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.message = action.error.message;
      })

      // ! Fetch The Task
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.message = action.error.message;
      })
      // ! Delete Data
      .addCase(deleteData.fulfilled, (state, action) => {
        let filterData = state.tasks.filter(
          (task) => task.id !== action.payload,
        );
        state.tasks = filterData;
      });
  },
});

export default crudSlice.reducer;
