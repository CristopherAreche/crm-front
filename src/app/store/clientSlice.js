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

const initialState = {
  clients: [],
  clientDetail: [],
  clientSelected: "",
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
    cleanClientSelect : (state, action) => {
      state.clientSelected = ''
    },
    searchClients: (state, action) => {
      state.clients = action.payload;
    },
    cleanDetail: (state, action) => {
      state.clientDetail = [];
    },
    sortClients: (state, action) => {
      const { order } = action.payload;
      state.clients.sort((a, b) =>
        order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    },
    sortVipClients: (state, action) => {
      const { order } = action.payload;
      state.clients.sort((a, b) =>
        order === "asc" ? a.vip - b.vip : b.vip - a.vip
      );
    },
    sortEnabledClients: (state, action) => {
      const { orderEn } = action.payload;
      state.clients.sort((a, b) =>
        orderEn === "asc" ? a.enable - b.enable : b.enable - a.enable
      );
    },
    sortPurchases: (state, action) => {
      const { orderP } = action.payload;
      state.clients.sort((a, b) =>
        orderP === "asc" ? a.totalPurchased - b.totalPurchased : b.totalPurchased - a.totalPurchased
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postClient.fulfilled, (state, action) => {
        state.clients.unshift(action.payload);
        console.log(state.clients);
      })
      .addCase(postClient.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(getClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.clients = action.payload;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getClient.fulfilled, (state, action) => {
        state.clientDetail = action.payload;
      })

      .addCase(getClientName.fulfilled, (state, action) => {
        state.clients = action.payload;
      })

      .addCase(putClient.fulfilled, (state, action) => {
        const { id, name, email, phone } = action.payload;
        console.log(action);
        const indexClient = state.clients.findIndex(
          (client) => client.id === id
        );
        console.log(id);
        console.log(indexClient);
        if (indexClient !== -1) {
          state.clients[indexClient].name = name;
          state.clients[indexClient].email = email;
          state.clients[indexClient].phone = phone;
        }
        console.log(state.clients);
      })
      .addCase(putDisableClient.fulfilled, (state, action) => {
        const clientFounded = state.clients.find(
          (client) => client.id === state.clientSelected
        );
        if (clientFounded) clientFounded.enable = false;
      })

      .addCase(putEnableClient.fulfilled, (state, action) => {
        const clientFounded = state.clients.find(
          (client) => client.id === state.clientSelected
        );
        if (clientFounded) clientFounded.enable = true;
      });
  },
});
export const { getDetailClient, clientName, clientCheckbox, searchClients, sortClients, sortPurchases , sortVipClients, sortEnabledClients, cleanDetail, cleanClientSelect, selectedClientCheckbox} =
  clientSlice.actions;
export default clientSlice.reducer;
