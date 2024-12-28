import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  activeUser: {},
};

let UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ACTIVE_USER: (state, action) => {
      state.activeUser = { ...action.payload };
    },
  },
});

export const { ACTIVE_USER } = UserSlice.actions;
export const selectUser = (state) => state.user.activeUser;
export default UserSlice;
