import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";
import URL from "../utils/env";

const API_URL_ACTIVITY = `${URL}/activity`;

export const updateActivity = createAsyncThunk(
  "activity/createActivity",
  async (activity) => {
    const response = await axios.put(`${API_URL_ACTIVITY}`, activity);
    return response.data;
  }
);

export const createActivity = createAsyncThunk(
  "activity/createActivity",
  async ({ activity, sale }) => {
    try {
      const { data } = await axios.post(`${API_URL_ACTIVITY}`, activity);

      const activityId = data.id;
      if (sale.length) {
        const promises = sale.map(async (product) => {
          const response = await axios.post(`${URL}/sale_product`, {
            ...product,
            activityId,
          });

          return response.data;
        });

        const dataSale = await Promise.all(promises);
      }

      return data;
    } catch (error) {
      swal("Error", `${error.response.data.error}`, "error");
    }
  }
);
