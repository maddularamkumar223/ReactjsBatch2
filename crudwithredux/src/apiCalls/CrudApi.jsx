import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../utilities/Utilities";

export let createTask = createAsyncThunk("tasks/createTask", async (data) => {
  let response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
});

export let fetchTasks = createAsyncThunk("task/fetchTask", async () => {
  let response = await fetch(baseUrl);
  let responseData = await response.json();
  return responseData;
});

export let deleteData = createAsyncThunk("task/deleteTask", async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return id;
});
