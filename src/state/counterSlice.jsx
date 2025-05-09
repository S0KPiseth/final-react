import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalCartItems: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});
export const { addItem, removeItem } = counterSlice.actions;
export default counterSlice.reducer;
