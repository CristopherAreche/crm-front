import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
  client: [
    {
      name: "",
      email: "",
      phone: "",
      vip: "",
    },
  ],
  clientDetail: [],
};
export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    // getAllClients: (state, action) => {
    //   fetch("https://crm.up.railway.app/api/clients")
    //     .then((res) => {
    //       res.json;
    //     })
    //     .then((data) => {
    //       const clients = data;
    //     });

    //   clients = action.payload;
    // },
    addClient: (state, action) => {},

    editClient: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const foundClient = state.find((client) => client.id === action.payload);
      if (foundClient) {
        foundClient.name = name;
        foundClient.email = email;
        foundClient.phone = phone;
      }
    },
    getDetailClient: (state, action) => {
      const { name, email, phone, vip, enable } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.vip = vip;
      state.enable = enable;
    },
  },
});

export const { addClient, getAllClients, getDetailClient } =
  clientSlice.actions;
export default clientSlice.reducer;
