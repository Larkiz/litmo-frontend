import { optionsSlice } from "@/redux/slices/optionsSlice";
import { profileSlice } from "@/redux/slices/profileSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    optionsStore: optionsSlice.reducer,
    profileStore: profileSlice.reducer,
  },
});
