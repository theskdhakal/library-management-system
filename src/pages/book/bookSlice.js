import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setbook: (state, action) => {
      console.log(action);
      if (!state.book.length && !action.payload.length) return;
      state.book = action.payload;
    },
  },
});

export const { setbook } = bookSlice.actions;

export default bookSlice.reducer;
