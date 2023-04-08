import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL_PRODUCTS = "https://crm.up.railway.app/api/product";
const bossId = "00d4cf20-b761-40cc-baf2-7c40aa53caf9";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await axios.get(`${API_URL_PRODUCTS}?bossId=${bossId}`);
    return response.data;
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const response = await axios.get(`${API_URL_PRODUCTS}/${id}`);
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    const response = await axios.post(`${API_URL_PRODUCTS}`, product);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await axios.put(
      `${API_URL_PRODUCTS}/${product.id}`,
      product
    );
    return response.data;
  }
);

export const toggleStatusProduct = createAsyncThunk(
  "products/toggleStatusProduct",
  async ({ productSelected, enable }) => {
    try {
      await axios.put(API_URL_PRODUCTS, { enable, id: productSelected });
      return enable;
    } catch (error) {
      return error.response.data.error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.delete(`${API_URL_PRODUCTS}/${id}`);
    return response.data;
  }
);
