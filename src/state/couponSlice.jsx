import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valid: false,
};
const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon: (state, actions) => {
      const coupon = actions.payload;
      if (coupon === "GREEN10") {
        state.valid = true;
      } else {
        state.valid = false;
      }
    },
  },
});
export const { applyCoupon } = couponSlice.actions;
export default couponSlice.reducer;
