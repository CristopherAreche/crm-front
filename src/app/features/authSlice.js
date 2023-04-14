import { createSlice } from "@reduxjs/toolkit";
import { postUserInfo } from "../../services/authServices";
import { setUser } from "../../services/authServices";

const initialState = {
  userInfo: [],
  User: [],
  userRole: null,
  userLogin: [],
  message: "",
  status: "idle",
  error: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(postUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(setUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.User = action.payload;
        state.userRole = action.payload.role;
      })
      .addCase(setUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      }
      );
  },

});

export default userInfoSlice.reducer;
