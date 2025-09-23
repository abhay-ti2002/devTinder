import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../appSlice/userSlice";
import logoSlice from "../appSlice/logoSlice";
import feedSlice from "../appSlice/feedSlice";
import connectionSlice from "../appSlice/connectionSlice";
import requestsSlice from "../appSlice/requestsSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    logo: logoSlice,
    usersFeed: feedSlice,
    Connections: connectionSlice,
    requests: requestsSlice,
  },
});

export default appStore;
