import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await axios.get("https://crm.up.railway.app/api/client");
  return response.data;
});

export const postClient = async (payload) => {
  return await axios.post("https://crm.up.railway.app/api/client", payload);
};

export const putClient = async (payload) => {
  return await axios.put("https://crm.up.railway.app/api/client", payload);
};

export const getClient = async (id) => {
  const res = await axios(`https://crm.up.railway.app/api/client/${id}`);
  const data = res.data;
  return data;
};

export const getClientName = async (name) => {
  const res = await axios("https://crm.up.railway.app/api/client?name=" + name);
  const data = res.data;
  return data;
};
