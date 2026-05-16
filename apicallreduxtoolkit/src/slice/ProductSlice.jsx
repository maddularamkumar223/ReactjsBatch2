import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../apicalls/ProductApi";
let initialState = {
  products: [],
  loading: false,
  error: "",
};
let productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        console.log(state);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default productSlice.reducer;
