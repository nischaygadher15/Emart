import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: true,
};

let LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    StartLoading: (state, action) => {
      state.isLoading = true;
    },
    StopLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { StartLoading, StopLoading } = LoaderSlice.actions;
export const selectLoader = (state) => state.loader.isLoading;
export default LoaderSlice;
