import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  itemsArrays: [],
};

const cartItemsSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItems: (state, actions) => {
      const element = actions.payload;

      const existingItem = state.itemsArrays.findIndex((item) => item.id === element.id);

      if (existingItem >= 0) {
        state.itemsArrays[existingItem].quantity += 1;
      } else {
        state.itemsArrays.push(element);
      }
    },
    removeItems: (state, actions) => {
      const element = actions.payload;
      const existingItem = state.itemsArrays.findIndex((item) => item.id === element.id);
      if (state.itemsArrays[existingItem].quantity > 1) {
        state.itemsArrays[existingItem].quantity -= 1;
      } else {
        state.itemsArrays = state.itemsArrays.filter((e) => e.id != element.id);
      }
    },
    checkOut: (state) => {
      state.itemsArrays = [];
    },
  },
});
export const { addItems, removeItems, checkOut } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
