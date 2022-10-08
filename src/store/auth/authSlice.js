import { createSlice } from "@reduxjs/toolkit";
import { isUserLoggedIn } from "../../utils/localStorge";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: isUserLoggedIn(),
    user: null,
  },
  reducers: {
    SET_IS_AUTH(state, action) {
      state.isAuth = action.payload;
    },
    SET_USER(state, action) {
      state.user = action.payload;
    },
  },
});

export const { SET_IS_AUTH, SET_USER } = authSlice.actions;

export default authSlice.reducer;
