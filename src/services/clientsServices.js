import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const API_URL_CLIENT = 'https://crm.up.railway.app/api/client'

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await axios.get(API_URL_CLIENT);
  return response.data;
});

export const postClient = createAsyncThunk(
  `clients/postClient`,
  async (payload) => {
    try {
      const { data } = await axios.post(
        API_URL_CLIENT,
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
        API_URL_CLIENT,
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

export const toggleStatusClient = createAsyncThunk(
  "clients/toggleStatusClient",
  async ({clientSelected, enable}) => {
    try {
       await axios.put(
        API_URL_CLIENT,
        { enable , id:clientSelected }
      );
      return enable;
    } catch (error) {
      return error.response.data.error;
    }
  }
);

export const toggleVipClient = createAsyncThunk(
  "clients/toggleVipClient",
  async ({clientSelected, vip}) => {
    try {
       await axios.put(
        API_URL_CLIENT,
        { vip , id:clientSelected }
      );
      return vip;
    } catch (error) {
      return error.response.data.error;
    }
  }
);




export const getClient = createAsyncThunk("clients/getClient", async (id) => {
  try {
    const res = await axios(`${API_URL_CLIENT}?id=${id}`);
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
      `${API_URL_CLIENT}?name=${name}` 
    );
    const data = res.data;
    return data;
  }
);
