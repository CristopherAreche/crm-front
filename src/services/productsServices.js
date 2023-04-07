import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL_PRODUCTS = "https://crm.up.railway.app/api/product";
const bossId = "d4581b16-93f0-472a-b5c1-22ac5705ee7c";


export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async () => {
        const response = await axios.get(`${API_URL_PRODUCTS}?bossId=${bossId}`);
        return response.data;
    }
);