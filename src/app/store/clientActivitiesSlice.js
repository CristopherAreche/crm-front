import { createSlice } from "@reduxjs/toolkit";
import getActivities from "../../services/fake_api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtainActivities = createAsyncThunk(
  "d/obtainActivities",
  async () => {
    const response = await getActivities();
    return response;
  }
);

const activitySlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtainActivities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(obtainActivities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activities = action.payload;
      })
      .addCase(obtainActivities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default activitySlice.reducer;
