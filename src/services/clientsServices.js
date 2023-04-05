import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await axios.get("https://crm.up.railway.app/api/client");
  return response.data;
});

export const postClient = createAsyncThunk(
  `clients/postClient`,
  async (payload) => {
    try {
      console.log(payload);
      const { data } = await axios.post(
        "https://crm.up.railway.app/api/client",
        payload
      );
      console.log(data);
      swal(
        "Agregar",
        `El cliente ${data.name} fue creado correctamente`,
        "succes"
      );

      return data;
    } catch (error) {
      console.log(error);
      swal("Error", `${error.response.data.error}`, "error");
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

      console.log(data);
      swal(
        "Modificación",
        `El cliente ${data.name} fua actualizado correctamente`,
        "success"
      );

      return data;
    } catch (error) {
      swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
);

export const putDisableClient = createAsyncThunk(
  "clients/putDisableClient",
  async (id) => {
    try {
      const { data } = await axios.put(
        `https://crm.up.railway.app/api/client`,
        { enable: false, id }
      );
      return data;
    } catch (error) {
      return error.response.data.error;
    }
  }
);

export const putEnableClient = createAsyncThunk(
  "clients/putEnableClient",
  async (id) => {
    try {
      const { data } = await axios.put(
        `https://crm.up.railway.app/api/client`,
        { enable: true, id }
      );
      return data;
    } catch (error) {
      return error.response.data.error;
    }
  }
);

export const getClient = createAsyncThunk("clients/getClient", async (id) => {
  try {
    const res = await axios(`https://crm.up.railway.app/api/client?id=${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    swal("Error", `${error.response.data.error}`, "error");
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
