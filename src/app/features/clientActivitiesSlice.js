import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  stateDateFilter,
  stateActivitiesFilter,
} from "../../handlers/handlerActivitiesClient";
import axios from "axios";

const API_URL_ACTIVITY = "https://crm.up.railway.app/api/activity";
const API_URL_TASK = "https://crm.up.railway.app/api/task";

export const obtainActivities = createAsyncThunk(
  "activities/obtainActivities",
  async (clientId) => {
    const response = await axios.get(
      `${API_URL_ACTIVITY}?clientId=${clientId}`
    );
    return response.data;
  }
);

export const obtainTask = createAsyncThunk(
  "activities/obtainTask",
  async (clientId) => {
    const response = await axios.get(`${API_URL_TASK}?clientId=${clientId}`);
    return response.data;
  }
);

const activitySlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
    tasks: [],
    activitiesFilter: [],
    status: "idle",
    statusTask: "idle",
    error: null,
  },
  reducers: {
    dateFilter: (state, action) => {
      stateDateFilter(state, action);
    },

    activitiesFilter: (state, action) => {
      stateActivitiesFilter(state, action);
    },
    cleanTasks: (state, action) => {
      state.tasks = [];
      state.statusTask = "idle";
    },
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
      })
      .addCase(obtainTask.pending, (state) => {
        state.statusTask = "loading";
      })
      .addCase(obtainTask.fulfilled, (state, action) => {
        state.statusTask = "succeeded";
        state.tasks = action.payload;
      });
  },
});

export const { dateFilter, activitiesFilter, cleanTasks } =
  activitySlice.actions;
export default activitySlice.reducer;
