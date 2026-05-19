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
