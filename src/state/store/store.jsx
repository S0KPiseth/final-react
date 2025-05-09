import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import changePageReducer from "../changePageSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    changePage: changePageReducer,
  },
});
