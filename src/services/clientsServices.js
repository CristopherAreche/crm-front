import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await axios.get("https://crm.up.railway.app/api/client");
  return response.data;
});

//POR FAVOR NO ME BORRES... solo estoy aqui espero que el endpoint funcione correctamente.
//att:cristopher
export const getClientActivity = createAsyncThunk(
  "activities/getClientActivity",
  async () => {
    const response = await axios.get("https://crm.up.railway.app/api/activity");
    return response.data;
  }
);

export const postClient = createAsyncThunk(
  `clients/postClient`,
  async (payload) => {
    try {
      const { data } = await axios.post(
        "https://crm.up.railway.app/api/client",
        payload
      );
      console.log(data);
      alert("Cliente creado correctamente");

      return data;
    } catch (error) {
      alert(error.response.data.error);
      return error.response.data.error;
    }
  }
);

export const putClient = createAsyncThunk(
  `clients/putClient`,
  async (payload) => {
    try {
      const { data } = await axios.put(
        "https://crm.up.railway.app/api/client",
        payload
      );

      alert(data);

      return data;
    } catch (error) {
      alert(error.response.data.error);
      return error.response.data.error;
    }
  }
);

export const putDisableClient = createAsyncThunk(
  'clients/putDisableClient',
  async (id) => {
    try {
      const { data } = await axios.put(
        `https://crm.up.railway.app/api/client?id=${id}`,
        {enable : false}
      )
      return data
    } catch (error) {
      return error.response.data.error;
      
    }
  }
)

export const getClient = createAsyncThunk("clients/getClient", async (id) => {
  try {
    const res = await axios(`https://crm.up.railway.app/api/client?id=${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    alert(error.response.data.error);
    return error.response.data.error;
  }
});

export const getClientName = createAsyncThunk(
  "clients/getClientName",
  async (name) => {
    const res = await axios(
      "https://crm.up.railway.app/api/client?name=" + name
    );
    const data = res.data;
    return data;
  }
);
