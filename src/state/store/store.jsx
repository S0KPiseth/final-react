import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import changePageReducer from "../changePageSlice";
import cartItemsReducer from "../cartItems";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    changePage: changePageReducer,
    cartItems: cartItemsReducer,
  },
});
