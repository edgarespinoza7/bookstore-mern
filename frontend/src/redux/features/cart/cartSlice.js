import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
        });
        alert("Item added");
      } else {
        alert("Item already exists in the cart");
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
