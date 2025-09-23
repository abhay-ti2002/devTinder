import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "connection requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequests: {},
  },
});

export const { addRequests, removeRequests } = requestsSlice.actions;
export default requestsSlice.reducer;
