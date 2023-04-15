// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "https://crm2.up.railway.app/api/activity";

// export const updateActivity = createAsyncThunk(
//   "activity/createActivity",
//   async (activity) => {
//     const response = await axios.put(`${API_URL}`, activity);
//     return response.data;
//   }
// );

// const initialState = {
//   status: "idle",
//   error: null,
// };

// const postActivitySlice = createSlice({
//   name: "updateActivity",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(updateActivity.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(updateActivity.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(updateActivity.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default postActivitySlice.reducer;
