import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const API_URL_SELLER = `https://crm.up.railway.app/api/salesman`;
const bossId = "00d4cf20-b761-40cc-baf2-7c40aa53caf9";

export const getSellers = createAsyncThunk("sellers/getSellers", async () => {
  const res = await axios.get(`${API_URL_SELLER}?bossId=${bossId}`);
  return res.data;
});

export const getSeller = createAsyncThunk('sellers/getSeller', async (id) => {
  try {
    const { data } = await axios.get(`${API_URL_SELLER}?bossId=${bossId}&id=${id}`)
    return data
  } catch (error) {
    await swal("Error", `${error.response.data.error}`, "error");
    return error.response.data.error;
  }
})

export const postSeller = createAsyncThunk(
  `sellers/postSeller`,
  async (payload) => {
    try {
      const { data } = await axios.post(API_URL_SELLER, payload);
      await swal(
        "Agregar",
        `El vendedor ${data.name} fue creado correctamente`,
        "succes"
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
  async ({enable, id}) => {
    try {
      const form = new FormData()
      const data = {enable, id}
      form.append('sellerData', JSON.stringify(data))
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

