import { createSlice } from "@reduxjs/toolkit";
import {
  getClient,
  getClients,
  postClient,
  putClient,
  getClientName,
} from "../../services/clientsServices";


const initialState = {
  clients: [],
  clientDetail: {},
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
    sortClients: (state, action) => {
      const { order } = action.payload;
      state.clients.sort((a, b) =>
        order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      );
    },
    sortVipClients: (state, action) => {
      const { order } = action.payload;
    
      // Divide los clientes en dos grupos: vip y no vip
      const vipClients = state.clients.filter((client) => client.vip);
      const nonVipClients = state.clients.filter((client) => !client.vip);
    
      // Ordena los clientes vip por su propiedad "vip"
      vipClients.sort((a, b) =>
        order === "asc" ? a.vip.localeCompare(b.vip) : b.vip.localeCompare(a.vip)
      );
    
      // Junta los clientes vip ordenados con los no vip sin ordenar
      const sortedClients = [...vipClients, ...nonVipClients];
    
      // Actualiza el estado con los clientes ordenados
      state.clients = sortedClients;
    },
    sortEnabledClients: (state, action) => {
      const { order } = action.payload;
    
      // Divide los clientes en dos grupos: habilitados y no habilitados
      const enabledClients = state.clients.filter((client) => client.enabled);
      const disabledClients = state.clients.filter((client) => !client.enabled);
    
      // Ordena los clientes habilitados por su propiedad "enabled"
      enabledClients.sort((a, b) =>
        order === "asc" ? a.enabled.localeCompare(b.enabled) : b.enabled.localeCompare(a.enabled)
      );
    
      // Junta los clientes habilitados ordenados con los no habilitados sin ordenar
      const sortedEClients = [...enabledClients, ...disabledClients];
    
      // Actualiza el estado con los clientes ordenados
      state.clients = sortedEClients;
    }
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
      });
  },
});

export const { getDetailClient, clientName, clientCheckbox, searchClients, sortClients, sortVipClients, sortEnabledClients} =
  clientSlice.actions;


export default clientSlice.reducer;
