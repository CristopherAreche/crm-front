import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL_ACTIVITY = "https://crm2.up.railway.app/api/activity";

export const updateActivity = createAsyncThunk(
  "activity/createActivity",
  async (activity) => {
    const response = await axios.put(`${API_URL_ACTIVITY}`, activity);
    return response.data;
  }
);

export const createActivity = createAsyncThunk(
  "activity/createActivity",
  async (activity, sale) => {
    const response = await axios.post(`${API_URL_ACTIVITY}`, activity);

    const promises = sale.map(async (product) => {
      const response = await axios.post(
        "https://crm2.up.railway.app/api/activity"
      );
      return response.data;
    });

    const dataPoke = await Promise.all(promises);
    console.log("-->", response.data);
    return response.data;
  }
);
