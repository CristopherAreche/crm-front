import { createSlice } from '@reduxjs/toolkit';
import { postUserInfo } from '../../services/authServices';

const initialState = {
    userInfo: [],
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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(postUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userInfoSlice.reducer;
