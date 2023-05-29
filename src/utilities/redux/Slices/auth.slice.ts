import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "checkLogin",
  initialState: {
    isLogin: false,
    jwt: "",
  },
  reducers: {
    authLogin: (state, action) => {
      state.isLogin = true;
      state.jwt = action.payload;
    },
    authLogout: (state) => {
      state.isLogin = false;
      state.jwt = "";
    },
  },
});

export const { authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;
