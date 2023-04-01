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
  status: "idle",
  error: null,
};
export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },

  addClient: async (state, action) => {
    await postClient(action.payload);
    state.clients.push(action.payload);
  },

  editClient: async (state, action) => {
    await putClient(action.payload);

    const { id, name, email, phone } = action.payload;
    const foundClient = state.clients.find((client) => client.id === id);
    if (foundClient) {
      foundClient.name = name;
      foundClient.email = email;
      foundClient.phone = phone;
    }
  },
  getDetailClient: async (state, action) => {
    const { id } = action.payload;
    const clientDetail = await getClient(id);

    state.clientDetail = clientDetail;
  },

  clientName: async (state, action) => {
    const { name } = action.payload;
    const ClientName = await getClientName(name);
    state.clientDetail = ClientName;
    console.log(ClientName);
  },

  enableClient: async (state, action) => {
    await putClient(action.payload);
    const { id, enable } = action.payload;
    const foundClient = state.clients.find((client) => client.id === id);
    if (foundClient) {
      foundClient.enable = enable;
    }
  },
});

export const { addClient, getAllClients, getDetailClient, clientName } =
  clientSlice.actions;
export default clientSlice.reducer;
