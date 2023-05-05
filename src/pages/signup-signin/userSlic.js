import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  clients: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setClients: (state, { payload }) => {
      state.clients = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const { setClients } = userSlice.actions;

export default userSlice.reducer;
