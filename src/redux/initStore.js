import { optionsSlice } from "@/redux/slices/optionsSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    optionsStore: optionsSlice.reducer,
  },
});
