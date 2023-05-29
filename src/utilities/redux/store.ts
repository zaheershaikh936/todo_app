import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/auth.slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;
