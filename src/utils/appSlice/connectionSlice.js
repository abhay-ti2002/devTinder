import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "Connection",
  initialState: null,
  reducers: {
    addConneciton: (state, action) => {
      return action.payload;
    },
    removeConnection: {},
  },
});

export const { addConneciton } = connectionSlice.actions;
export default connectionSlice.reducer;
