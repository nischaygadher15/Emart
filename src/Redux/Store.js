import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User/UserSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});

export default Store;
