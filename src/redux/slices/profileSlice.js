import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    id: null,
    username: null,
    color: null,
    groups: [],
    joined: null,
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, { payload }) => {
      state.profile = { ...state.profile, ...payload };
    },
  },
});

export const { setProfile } = profileSlice.actions;
