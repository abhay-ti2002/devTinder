import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "userFeed",
  initialState: {
    feed: [],
  },
  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload;
    },
    removeFeed: (state, action) => {
      const newFeed = state.feed.filter((data) => data._id !== action.payload);

      return newFeed;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
