import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    isLogged: false,
  },
  reducers: {
    setLogged: (state, { payload }) => {
      state.isLogged = payload;
    },
  },
});

// default
export const { setLogged } = optionsSlice.actions;
