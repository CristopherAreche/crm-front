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
  copyClients: [],
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
      const { order } = action.payload;
      const allClients = [...state.copyClients];
      const clientsSorted =
        order === "todos"
          ? allClients
          : state.clients.sort((a, b) =>
              order === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            );
      state.clients = clientsSorted;
    },
    sortVipClients: (state, action) => {
      const { order } = action.payload;
      const allClients = [...state.copyClients];
      const clientsSorted =
        order === "todos"
          ? allClients
          : state.clients.sort((a, b) =>
              order === "asc" ? a.vip - b.vip : b.vip - a.vip
            );

      state.clients = clientsSorted;
    },
    sortEnabledClients: (state, action) => {
      const { orderEn } = action.payload;
      const allClients = [...state.copyClients];
      const clientsSorted =
        orderEn === "todos"
          ? allClients
          : state.clients.sort((a, b) =>
              orderEn === "asc" ? a.enable - b.enable : b.enable - a.enable
            );

      state.clients = clientsSorted;
    },
    sortPurchases: (state, action) => {
      const { orderP } = action.payload;
      const allClients = [...state.copyClients];
      const clientsSorted =
        orderP === "todos"
          ? allClients
          : state.clients.sort((a, b) =>
              orderP === "asc"
                ? a.totalPurchased - b.totalPurchased
                : b.totalPurchased - a.totalPurchased
            );

      state.clients = clientsSorted;
    },

    resetClients: (state, action) => {
      state.clients = state.copyClients;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postClient.fulfilled, (state, action) => {
        if (typeof action.payload !== "string")
          state.clients = [...state.clients, action.payload];
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
        state.copyClients = action.payload;
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
