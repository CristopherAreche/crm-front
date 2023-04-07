import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const API_URL_SALESMAN = 'https://crm.up.railway.app/api/salesman'

export const getSellers = createAsyncThunk("sellers/getSellers", async () => {
    const res = await axios.get(API_URL_SALESMAN);
    return res.data;
  });

export const getSeller = async (id) => {
  const res = await axios.get(`${API_URL_SALESMAN}?id=${id}`)
  return res.data[0]
}
