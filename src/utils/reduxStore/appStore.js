import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../appSlice/userSlice";
import logoSlice from "../appSlice/logoSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    logo: logoSlice,
  },
});

export default appStore;
