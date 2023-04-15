import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axios from "axios";

const API_URL_BOSS = "https://crm.up.railway.app/api/dashboard_boss";

const API_URL_ALLS_BOSS = 'https://crm.up.railway.app/api/boss'


export const getBoss = createAsyncThunk("boss/getBoss", async (bossId) => {
  const response = await axios.get(
    `${API_URL_BOSS}?id=${bossId}`
  );
  return response.data;
});

export const putBoss = createAsyncThunk("boss/putBoss",
  async (payload) => {
    try {
      await axios.put(API_URL_ALLS_BOSS, payload);
      await swal(
        "Modificación",
        `Tus datos han sido actualizados correctamente`,
        "success"
      );

      return payload;
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
)


const initialState = {
  bossDashboard: [],
  boss : {},
  status : 'idle',
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
        state.status = 'success'
        state.bossDashboard = action.payload;
      })
      .addCase(getBoss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putBoss.fulfilled, (state, action) => {
        state.boss = action.payload
      })
  },
});

export default bossSlice.reducer;
