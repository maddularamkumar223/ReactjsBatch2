import { createAsyncThunk } from "@reduxjs/toolkit";

export let fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let responseData = await response.json();
    return responseData;
  },
);
