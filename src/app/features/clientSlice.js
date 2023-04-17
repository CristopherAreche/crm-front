import { createSlice } from "@reduxjs/toolkit";
import {
  getAllClients,
  getClient,
  getClients,
  postClient,
  putClient,
  getClientName,
  toggleStatusClient,
  toggleVipClient,
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
  stateToggleVipClient,
} from "../../handlers/handlerClients";

const initialState = {
  // clientRole: "admin",
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
    cleanAllClients: (state, action) => {
      state.clients = [];
      state.copyClients = [];
    },
    setClient: (state, action) => {
      state.clientRole = action.payload;
    },

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
      .addCase(getAllClients.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getAllClients.fulfilled, (state, action) => {
        stateGetClients(state, action);
      })
      .addCase(getAllClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = "failed";
        state.message = action.payload;
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

      .addCase(toggleStatusClient.fulfilled, (state, action) => {
        const status = action.payload;
        stateToggleStatusClient(state, action, status);
      })
      .addCase(toggleVipClient.fulfilled, (state, action) => {
        const status = action.payload;
        stateToggleVipClient(state, action, status);
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
  setClient,
  cleanAllClients,
} = clientSlice.actions;
export default clientSlice.reducer;
