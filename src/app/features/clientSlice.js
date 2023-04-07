import { createSlice } from "@reduxjs/toolkit";
import {
  getClient,
  getClients,
  postClient,
  putClient,
  getClientName,
  putDisableClient,
  putEnableClient,
} from "../../services/clientsServices";
import {
  stateOrderByPurchases,
  stateFilterByEnabled,
  stateFilterByVips,
  stateGetClients,
  statePostClient,
  statePutClients,
  stateSortedByAlph,
  stateToggleStatusClient,
} from "../../handlers/handlerClients";

const initialState = {
  clients: [],
  copyClients: [],
  clientDetail: [],
  clientSelected: null,
  message: "",
  status: "idle",
  error: null,
  searchClients: [],
};

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    selectedClientCheckbox: (state, action) => {
      state.clientSelected = action.payload;
    },
    cleanClientSelect: (state, action) => {
      state.clientSelected = "";
    },
    searchClients: (state, action) => {
      state.clients = action.payload;
    },
    cleanDetail: (state, action) => {
      state.clientDetail = [];
    },
    sortClients: (state, action) => {
      stateSortedByAlph(state, action);
    },
    sortVipClients: (state, action) => {
      stateFilterByVips(state, action);
    },
    sortEnabledClients: (state, action) => {
      stateFilterByEnabled(state, action);
    },
    sortPurchases: (state, action) => {
      stateOrderByPurchases(state, action);
    },
    resetClients: (state, action) => {
      state.clients = state.copyClients;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postClient.fulfilled, (state, action) => {
        statePostClient(state, action);
      })

      .addCase(postClient.rejected, (state, action) => {
        state.message = action.payload;
      })

      .addCase(getClients.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getClients.fulfilled, (state, action) => {
        stateGetClients(state, action);
      })

      .addCase(getClient.fulfilled, (state, action) => {
        state.clientDetail = action.payload;
      })

      .addCase(getClientName.fulfilled, (state, action) => {
        state.clients = action.payload;
      })

      .addCase(putClient.fulfilled, (state, action) => {
        statePutClients(state, action);
      })

      .addCase(putDisableClient.fulfilled, (state, action) => {
        stateToggleStatusClient(state, action, false);
      })
      .addCase(putEnableClient.fulfilled, (state, action) => {
        stateToggleStatusClient(state, action, true);
      });
  },
});
export const {
  getDetailClient,
  clientName,
  clientCheckbox,
  searchClients,
  sortClients,
  sortVipClients,
  sortEnabledClients,
  cleanDetail,
  cleanClientSelect,
  selectedClientCheckbox,
  sortPurchases,
  resetClients,
} = clientSlice.actions;
export default clientSlice.reducer;
