import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User/UserSlice";
import LoaderSlice from "./LoaderSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    loader: LoaderSlice.reducer,
  },
});

export default Store;
