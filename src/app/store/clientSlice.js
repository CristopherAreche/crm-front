import { createSlice } from "@reduxjs/toolkit";
import {
  getClient,
  getClients,
  postClient,
  putClient,
} from "../../services/clientsServices";

const initialState = {
  clients: [
    {
      id: "918b3e73-2a97-42e1-8549-3fec796cfd11",
      name: "prueba ",
      email: "prueba",
      phone: "prueba",
      vip: false,
      enable: true,
      createdAt: "2023-04-01T15:10:03.874Z",
      updatedAt: "2023-04-01T15:10:03.874Z",
      salesmanId: "9e3fa495-ae30-49d0-8644-819fd5cfe767",
    },
  ],
  clientDetail: {},
  clientSelected: "",
  message: "",
};

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    clientCheckbox: (state, action) => {
      state.clientSelected = action.payload;
    },

    getAllClients: async (state, action) => {
      const allClients = await getClients();
      state.clients = allClients;
    },

    extraReducers: (builder) => {
      builder
        .addCase(postClient.fulfilled, (state, action) => {
          state.clients.push(action.payload);
          console.log(state.clients);
        })
        .addCase(postClient.rejected, (state, action) => {
          state.message = action.payload;
        });
    },

    extraReducers: (builder) => {
      builder.addCase(putClient.fulfilled, (state, action) => {
        const { id, name, email, phone } = action.payload;

        const foundClient = state.clients.find((client) => client.id === id);
        if (foundClient) {
          foundClient.name = name;
          foundClient.email = email;
          foundClient.phone = phone;
        }
      });
    },

    getDetailClient: async (state, action) => {
      const { id } = action.payload;
      const clientDetail = await getClient(id);

      state.clientDetail = clientDetail;
    },

    enableClient: async (state, action) => {
      await putClient(action.payload);
      const { id, enable } = action.payload;
      const foundClient = state.clients.find((client) => client.id === id);
      if (foundClient) {
        foundClient.enable = enable;
      }
    },
  },
});

export const { getAllClients, getDetailClient } = clientSlice.actions;
export default clientSlice.reducer;
