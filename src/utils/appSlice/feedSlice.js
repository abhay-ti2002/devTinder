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
  },
});

export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
