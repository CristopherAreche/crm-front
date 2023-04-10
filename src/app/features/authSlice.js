import { createSlice } from '@reduxjs/toolkit';
import { postUserInfo } from '../../services/authServices';
const initialState = {
    userInfo: [],
    userLogin:[],
    message: "",
    status: "idle",
    error: null,
  };

const userInfoSlice = createSlice({
  name: 'userInfo',
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
  },
});

export default userInfoSlice.reducer;
