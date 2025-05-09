import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
const changePageSlice = createSlice({
  name: "changePage",
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value;
    },
  },
});
export const { change } = changePageSlice.actions;
export default changePageSlice.reducer;
