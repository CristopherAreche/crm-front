import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

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
  async ({ activity, sale }) => {
    console.log(activity);
    console.log(sale);
    try {
      const { data } = await axios.post(`${API_URL_ACTIVITY}`, activity);

      const activityId = data.id;
      if (sale.length) {
        const promises = sale.map(async (product) => {
          const response = await axios.post(
            "https://crm2.up.railway.app/api/sale_product",
            { ...product, activityId }
          );
          console.log("response.data-->" + response);
          return response.data;
        });

        const dataSale = await Promise.all(promises);
        console.log("dataSale--->" + dataSale);
      }
      console.log(data);
      return data;
    } catch (error) {
      swal("Error", `${error.response.data.error}`, "error");
    }
  }
);
