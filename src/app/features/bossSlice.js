import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axios from "axios";

const API_URL_BOSS = "https://crm.up.railway.app/api/dashboard_boss";

const API_URL_ALLS_BOSS = 'https://crm.up.railway.app/api/boss'

const bossId = '00d4cf20-b761-40cc-baf2-7c40aa53caf9'

export const getBoss = createAsyncThunk("boss/getBoss", async (id) => {
  const response = await axios.get(
    `${API_URL_BOSS}?id=${bossId}`
  );
  return response.data;
});

export const getBossById = createAsyncThunk("boss/getBossById",
  async () => {
    const {data} = await axios.get(API_URL_ALLS_BOSS)
    const bossFounded = data.find(boss => boss.id === bossId)
    return bossFounded
  }
)

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
  bossDashboard: null,
  boss : {},
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
        state.bossDashboard = action.payload;
      })
      .addCase(getBoss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBossById.fulfilled, (state, action) => {
        state.boss = action.payload
      })
      .addCase(putBoss.fulfilled, (state, action) => {
        state.boss = action.payload
      })
  },
});

export default bossSlice.reducer;
