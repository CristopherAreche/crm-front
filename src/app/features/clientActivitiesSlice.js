import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  stateDateFilter,
  stateActivitiesFilter,
} from "../../handlers/handlerActivitiesClient";
import { createActivity } from "../../services/activityService";
import axios from "axios";

const API_URL_ACTIVITY = `${process.env.REACT_APP_URL}/activity`;
const API_URL_TASK = `${process.env.REACT_APP_URL}/task`;

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

export const updateTask = createAsyncThunk(
  "activities/updateTask",
  async (task) => {
    const response = await axios.put(`${API_URL_TASK}`, task);
    return response.data;
  }
);

export const postTask = createAsyncThunk(
  "activities/postTask",
  async (task) => {
    const response = await axios.post(`${API_URL_TASK}`, task);
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
      })

      .addCase(postTask.pending, (state) => {
        state.statusTask = "loading";
      })
      .addCase(postTask.fulfilled, (state, action) => {
        state.statusTask = "succeeded";
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(updateTask.pending, (state) => {
        state.statusTask = "loading";
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.statusTask = "succeeded";
        const findIdx = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        state.tasks.splice(findIdx, 1, action.payload);
      })
      .addCase(createActivity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activities = [action.payload, ...state.activities];
        state.activitiesFilter = [...state.activities];
      })
      .addCase(createActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { dateFilter, activitiesFilter, cleanTasks } =
  activitySlice.actions;
export default activitySlice.reducer;
