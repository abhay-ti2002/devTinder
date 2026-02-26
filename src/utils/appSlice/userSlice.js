import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    status: 0,
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = [action.payload];
    },
    addStatus: (state, action) => {
      state.status = action.payload;
    },
    removeUser: (state) => {
      state.users = [];
    },
  },
});

export const { addUsers, addStatus, removeUser } = userSlice.actions;

export default userSlice.reducer;
