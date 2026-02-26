import { createSlice } from "@reduxjs/toolkit";

const logoSlice = createSlice({
  name: "logo",
  initialState: {
    check: "",
  },
  reducers: {
    addLogo: (state, action) => {
      state.check = action.payload;
    },
  },
});

export const { addLogo } = logoSlice.actions;

export default logoSlice.reducer;
