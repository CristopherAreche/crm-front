import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const API_URL_SELLER = `https://crm.up.railway.app/api/salesman`;
const bossId = "00d4cf20-b761-40cc-baf2-7c40aa53caf9";

export const getSellers = createAsyncThunk("sellers/getSellers", async () => {
  const res = await axios.get(`${API_URL_SELLER}?bossId=${bossId}`);
  return res.data;
});

export const getSeller = async (id) => {
  const res = await axios.get(`${API_URL_SELLER}?bossId=${bossId}&id=${id}`);
  return res.data;
};

export const postSeller = createAsyncThunk(
  `sellers/postSeller`,
  async (payload) => {
    try {
      console.log(payload);
      const { data } = await axios.post(API_URL_SELLER, payload);
      console.log(data);
      await swal(
        "Agregar",
        `El vendedor ${data.name} fue creado correctamente`,
        "succes"
      );

      return data;
    } catch (error) {
      console.log(error);
      await swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
);

export const putSeller = createAsyncThunk(
  `sellers/putSeller`,
  async (payload) => {
    try {
      console.log(payload);
      const { data } = await axios.put(API_URL_SELLER, payload);

      console.log();
      await swal(
        "Modificación",
        `El vendedor ${data.name} fua actualizado correctamente`,
        "success"
      );

      return data;
    } catch (error) {
      console.log(error);
      await swal("Error", `${error.response.data.error}`, "error");
      console.log(error.response);
      return error.response.data.error;
    }
  }
);

export const putDisableSeller = createAsyncThunk(
  "sellers/putDisableSeller",
  async (id) => {
    try {
      const sellerData = new FormData();
      sellerData.append("sellerData", JSON.stringify({ enable: false, id }));
      const { data } = await axios.put(API_URL_SELLER, sellerData);
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
      const sellerData = new FormData();
      sellerData.append("sellerData", JSON.stringify({ enable: true, id }));
      const { data } = await axios.put(API_URL_SELLER, sellerData);
      return data;
    } catch (error) {
      return error.response.data.error;
    }
  }
);
