import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";
import URL from "../utils/env";

const API_URL_PRODUCTS = `${URL}/product`;
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (bossId) => {
    try {
      const { data } = await axios.get(`${API_URL_PRODUCTS}?bossId=${bossId}`);
      console.log("data:", data);
    } catch (error) {
      console.log(error);
    }
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
    try {
      const { data } = await axios.post(`${API_URL_PRODUCTS}`, product);
      await swal(
        "Agregar",
        `El producto ${data.name} fue creado correctamente`,
        "succes"
      );
      return data;
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    try {
      const { data } = await axios.put(API_URL_PRODUCTS, product);

      await swal(
        "Modificación",
        `El producto ${data.name} fua actualizado correctamente`,
        "success"
      );

      return data;
    } catch (error) {
      await swal("Error", `${error.response.data.error}`, "error");
      return error.response.data.error;
    }
  }
);

export const toggleStatusProduct = createAsyncThunk(
  "products/toggleStatusProduct",
  async ({ productSelected, enable }) => {
    try {
      const productData = new FormData();
      productData.append(
        "productData",
        JSON.stringify({ enable, id: productSelected })
      );
      await axios.put(API_URL_PRODUCTS, productData);
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
