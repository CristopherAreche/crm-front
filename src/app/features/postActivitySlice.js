import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://crm.up.railway.app/api/activity";
const API_URL_SALE = "https://crm.up.railway.app/api/sale_product";

export const createActivity = createAsyncThunk(
  "activity/createActivity",
  async (activity, sale) => {
    const response = await axios.post(`${API_URL}`, activity);

    const sales = { ...sale, activityId: response.data.id };

    const salePost = await axios.post(`${API_URL_SALE}`, sales);

    return response.data;
  }
);

const initialState = {
  status: "idle",
  error: null,
};

const postActivitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createActivity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createActivity.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postActivitySlice.reducer;
