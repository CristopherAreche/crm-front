import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtainActivities = createAsyncThunk(
  "activities/getClientActivity",
  async (id) => {
    const response = await axios.get("https://crm.up.railway.app/api/activity");
    return response.data.filter((res) => res.clientId === id);
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
