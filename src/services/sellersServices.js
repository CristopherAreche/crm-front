import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";


export const getSellers = createAsyncThunk("sellers/getSellers", async () => {
    const res = await axios.get("https://crm.up.railway.app/api/salesman");
    return res.data;
  });