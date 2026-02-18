import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    isLogged: false,
    theme: "light",
    themeColors: {},
  },
  reducers: {
    setLogged: (state, { payload }) => {
      state.isLogged = payload;
    },
    switchTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

// default
export const { setLogged, switchTheme } = optionsSlice.actions;
