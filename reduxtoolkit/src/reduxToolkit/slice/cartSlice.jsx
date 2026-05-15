import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productCart: [],
};
let cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.productCart.push(action.payload);
    },
    removeCart(state, action) {
      let filterData = state.productCart.filter(
        (product) => product.id !== action.payload,
      );
      state.productCart = filterData;
    },
  },
});
export let { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
