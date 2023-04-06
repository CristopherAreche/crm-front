import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
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
    activitiesFilter: [],
    status: "idle",
    error: null,
  },
  reducers: {
    dateFilter: (state, action) => {
      if (action.payload.startDate != null) {
        const start = Number(action.payload.startDate.split("-").join(""));

        const end = Number(action.payload.endDate.split("-").join(""));

        const activitiesFilter = state.activities.filter((activities) => {
          const dateActivity = Number(
            activities.createdAt.split("T")[0].split("-").join("")
          );

          if (dateActivity >= start && dateActivity <= end) {
            return activities;
          }
        });
        state.activitiesFilter = activitiesFilter;
      } else {
        state.activitiesFilter = state.activities;
      }
    },

    activitiesFilter: (state, action) => {
      const value = action.payload;
      const allActivities = [...state.activities];
      let activitiesToFilter = value === "todos" && allActivities;
      const handleFilter = (query, toFilter) =>
        state.activities.filter((a) => a[query] === toFilter);
      if (value === "correos")
        activitiesToFilter = handleFilter("method", "Correo-E");
      if (value === "llamadas")
        activitiesToFilter = handleFilter("method", "Llamada");
      if (value === "concretados")
        activitiesToFilter = handleFilter("state", "Concretado");
      if (value === "pendientes")
        activitiesToFilter = handleFilter("state", "Pendiente");
      state.activitiesFilter = activitiesToFilter;
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
      });
  },
});

export const { dateFilter, activitiesFilter } = activitySlice.actions;
export default activitySlice.reducer;
