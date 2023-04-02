import { createSlice } from "@reduxjs/toolkit";
import {
  getClient,
  getClients,
  postClient,
  putClient,
  getClientName,
  putDisableClient,
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
    clientCheckbox: (state, action) => {
      state.clientSelected = action.payload;
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(postClient.fulfilled, (state, action) => {
        state.clients.push(action.payload);
        console.log(state.clients);
      })
      .addCase(postClient.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(putClient.fulfilled, (state, action) => {
        const { id, name, email, phone } = action.payload;

        const foundClient = state.clients.find((client) => client.id === id);
        if (foundClient) {
          foundClient.name = name;
          foundClient.email = email;
          foundClient.phone = phone;
        }
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

      .addCase(putDisableClient.fulfilled, (state, action) => {
        console.log(action.payload);
        const clientFounded = state.clients.find(
          (client) => client.id === state.clientSelected
        );
        if (clientFounded) clientFounded.enable = false;
      });
  },
});

export const {
  cleanDetail,
  getDetailClient,
  clientName,
  clientCheckbox,
  searchClients,
  sortClients,
} = clientSlice.actions;

export default clientSlice.reducer;
