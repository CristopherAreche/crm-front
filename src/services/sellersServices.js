import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const API_URL_SELLER = `https://crm.up.railway.app/api/salesman`;

export const getSellers = createAsyncThunk(
  "sellers/getSellers",
  async (bossId = "e2240175-ccee-4539-9a41-0e9b8d75303f") => {
    const res = await axios.get(`${API_URL_SELLER}?bossId=${bossId}`);
    return res.data;
  }
);

export const getSeller = async (id) => {
  const res = await axios.get(`${API_URL_SELLER}?id=${id}`)
  return res.data
}

export const postSeller = createAsyncThunk(
  `sellers/postSeller`,
  async (payload) => {
    try {
      const { data } = await axios.post(API_URL_SELLER, payload);
      console.log(data);
      swal(
        "Agregar",
        `El vendedor ${data.name} fue creado correctamente`,
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

export const putSeller = createAsyncThunk(
  `sellers/putSeller`,
  async (payload) => {
    try {
      const { data } = await axios.put(API_URL_SELLER, payload);

      console.log(data);
      swal(
        "Modificación",
        `El vendedor ${data.name} fua actualizado correctamente`,
        "success"
      );

      return data;
    } catch (error) {
      console.log(error);
      swal("Error", `${error.response.data.error}`, "error");
      console.log(error.response);
      return error.response.data.error;
    }
  }
);

export const putDisableSeller = createAsyncThunk(
  "sellers/putDisableSeller",
  async (id) => {
    try {
      const { data } = await axios.put(API_URL_SELLER, { enable: false, id });
      return data;
    } catch (error) {
      return error.response.data.error;
    }
  }
);

export const putEnableSeller = createAsyncThunk(
  "sellers/putEnableSeller",
  async (id) => {
    try {
      const { data } = await axios.put(API_URL_SELLER, { enable: true, id });
      return data;
    } catch (error) {
      return error.response.data.error;
    }
  }
);
