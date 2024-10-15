import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../redux/getTasksOps.js";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
