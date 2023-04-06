import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stateDateFilter, stateActivitiesFilter } from "../../handlers/handlerActivitiesClient";
import axios from "axios";

const API_URL_ACTIVITY = 'https://crm.up.railway.app/api/activity'

export const obtainActivities = createAsyncThunk(
  "activities/getClientActivity",
  async (id) => {
    const response = await axios.get(API_URL_ACTIVITY);
    return response.data.filter((res) => res.clientId === id);
  }
);
const activitySlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
    activitiesFilter: [],
    status: "idle",
    error: null,
  },
  reducers: {
    dateFilter: (state, action) => {
      stateDateFilter(state, action)
    },

    activitiesFilter : (state, action) => {
      stateActivitiesFilter(state, action)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(obtainActivities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(obtainActivities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activities = action.payload;
        state.activitiesFilter = action.payload;
      })
      .addCase(obtainActivities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { dateFilter, activitiesFilter } = activitySlice.actions;
export default activitySlice.reducer;
