import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/book/bookSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
  },
});
