import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/signup-signin/userSlic";
import bookReducer from "./pages/book/BookSlic";
import systemReducer from "./system/systemSlice";
import reviewReducer from "./pages/review/ReviewSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
    system: systemReducer,
    review: reviewReducer,
  },
});
