import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    adminAccess: false,
  },
  reducers: {
    setAminAccess: (state, { payload }) => {
      state.adminAccess = payload;
    },
  },
});

// default
export const { setAminAccess } = optionsSlice.actions;
