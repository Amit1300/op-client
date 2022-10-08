import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import issueSlice from "./issues/issueSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    issueStore: issueSlice,
  },
});
