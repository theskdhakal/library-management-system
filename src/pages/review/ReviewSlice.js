import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const reviewSlice = createSlice({
  name: "userReview",
  initialState,
  reducers: {
    setUserReview: (state, action) => {
      state.userReview = action.payload;
    },
  },
});

export const { setUserReview } = reviewSlice.actions;

export default reviewSlice.reducer;
