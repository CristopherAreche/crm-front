import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const API_URL_SELLER = `${process.env.REACT_APP_URL}/salesman`;

export const getSellers = createAsyncThunk(
  "sellers/getSellers",
  async (bossId) => {
    const res = await axios.get(`${API_URL_SELLER}?bossId=${bossId}`);
    return res.data;
  }
);

export const getSeller = async ({ bossId, id }) => {
  try {
    const { data } = await axios.get(
      `${API_URL_SELLER}?bossId=${bossId}&id=${id}`
    );
    return data;
  } catch (error) {
    await swal("Error", `${error.response.data.error}`, "error");
    return error.response.data.error;
  }
};

export const postSeller = createAsyncThunk(
  `sellers/postSeller`,
  async (payload) => {
    try {
      const { data } = await axios.post(API_URL_SELLER, payload);
      await swal(
        "Agregar",
        `El vendedor ${data.name} fue creado correctamente`,
        "success"
      );

      return data;
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
);

export const putSeller = createAsyncThunk(
  `sellers/putSeller`,
  async (payload) => {
    try {
      const { data } = await axios.put(API_URL_SELLER, payload);

      await swal(
        "Modificación",
        `El vendedor ${data.name} fua actualizado correctamente`,
        "success"
      );

      return data;
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
);

export const toggleStatusSeller = createAsyncThunk(
  "clients/toggleStatusSeller",
  async ({ enable, id }) => {
    try {
      const form = new FormData();
      const data = { enable, id };
      form.append("sellerData", JSON.stringify(data));
      await axios.put(API_URL_SELLER, form);
      await swal(
        "Modificación",
        `Su estado ha sido modificado correctamente`,
        "success"
      );
      return enable;
    } catch (error) {
      return error.response.data.error;
    }
  }
);
