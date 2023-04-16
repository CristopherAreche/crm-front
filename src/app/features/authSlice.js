import { createSlice } from "@reduxjs/toolkit";
import { postUserInfo } from "../../services/authServices";
import { setUser, putUser } from "../../services/authServices";
import { login } from "../../services/authServices";

const initialState = {
  userInfo: [],
  User: {},
  userRole: null,
  userLogin: [],
  message: "",
  status: "idle",
  error: null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    logoutUser: (state, action) => {
      state.User = {};
      state.userRole = null;
      state.status = "idle";
    },
    toggleStatusMyPerfil: (state, action) => {
      state.User.enable = !state.User.enable;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(putUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.User = action.payload;
      })

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
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.User = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { logoutUser, toggleStatusMyPerfil } = userInfoSlice.actions;
export default userInfoSlice.reducer;
