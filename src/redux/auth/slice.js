import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    client: {
      name: "",
      email: "",
    },
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(Register.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default authSlice.reducer;
