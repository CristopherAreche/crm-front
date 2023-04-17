import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import swal from "sweetalert";
import { jwtVerify } from "jose";
import URL from "../utils/env";

const API_URL_ALLS_BOSS = `${URL}/boss`;

export const postUserInfo = createAsyncThunk(
  "userInfo/postUserInfo",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/boss`, userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postUserLogin = createAsyncThunk(
  "userLogin/postUserLogin",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/boss`, formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postLogin = createAsyncThunk(
  "loginUser/postLogin",
  async (loginUser, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/login`, loginUser, {
        withCredentials: true,
      });
      console.alert(response.data);
    } catch (error) {
      console.alert(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const setUser = createAsyncThunk(
  "user/setUser",
  async (user, thunkAPI) => {
    try {
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk("user/login", async (data) => {
  const { email, password, name, nickname } = data;
  try {
    const response = await axios.post(
      `${URL}/login`,
      { email, password, name, nickname },
      {
        withCredentials: true,
      }
    );
    const cookies = new Cookies();
    if (response.data.token) {
      cookies.set("myToken", response.data.token, { path: "/" });
    }
    const { payload } = await jwtVerify(
      response.data.token,
      new TextEncoder().encode("secret")
    );
    return { data: payload };
  } catch (error) {
    swal("Error", "Usuario o contraseña incorrectos", "error");
  }
});

export const putUser = createAsyncThunk("boss/putUser", async (payload) => {
  try {
    const { data } = await axios.put(API_URL_ALLS_BOSS, payload);
    await swal(
      "Modificación",
      `Tus datos han sido actualizados correctamente`,
      "success"
    );

    return data;
  } catch (error) {
    await swal("Error", `${error.response.data.error}`, "error");
    return error.response.data.error;
  }
});
