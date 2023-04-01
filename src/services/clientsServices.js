import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getClients = async () => {
  const res = await axios("https://crm.up.railway.app/api/client");
  const data = res.data;
  return data;
};

export const postClient = createAsyncThunk(
  `clients/postClient`,
  async (payload) => {
    try {
      const data = await axios.post(
        "https://crm.up.railway.app/api/client",
        payload
      );
      alert("Cliente creado con éxito");

      return data;
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
      return error.response.data.error;
    }
  }
);

export const putClient = createAsyncThunk(
  `clients/putClient`,
  async (payload) => {
    try {
      const data = await axios.put(
        "https://crm.up.railway.app/api/client",
        payload
      );

      alert("Cliente modificado con éxito");
      return data;
    } catch (error) {
      alert(error.response.data.error);
      return error.response.data.error;
    }
  }
);

export const getClient = async (id) => {
  const res = await axios(`https://crm.up.railway.app/api/client/${id}`);
  const data = res.data;
  return data;
};
