import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL_BOSS = "https://crm.up.railway.app/api/dashboard_boss";

export const getBoss = createAsyncThunk("boss/getBoss", async () => {
  // const response = await axios.get(`${API_URL_BOSS}?id=${bossId}`);
  const response = await axios.get(
    `${API_URL_BOSS}?id=00d4cf20-b761-40cc-baf2-7c40aa53caf9`
  );
  console.log(response);
  return response.data;
});

const initialState = {
  boss: null,
  loading: false,
  error: null,
};

export const bossSlice = createSlice({
  name: "boss",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoss.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBoss.fulfilled, (state, action) => {
        state.loading = false;
        state.boss = action.payload;
      })
      .addCase(getBoss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bossSlice.reducer;
