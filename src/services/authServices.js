import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import swal from "sweetalert";
import { jwtVerify } from "jose";

const API_URL_ALLS_BOSS = `${process.env.REACT_APP_URL}/boss`;
const API_URL_SELLER = `${process.env.REACT_APP_URL}/salesman`;

export const postUserInfo = createAsyncThunk(
  "userInfo/postUserInfo",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/boss`,
        userInfo
      );
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
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/login`,
        loginUser,
        {
          withCredentials: true,
        }
      );
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

export const putSeller = createAsyncThunk(`user/putSeller`, async (payload) => {
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
});

export const login = createAsyncThunk("user/login", async (data) => {
  const { email, password, name, nickname } = data;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/login`,
      { email, password, name, nickname },
      {
        withCredentials: true,
      }
    );
    const cookies = new Cookies();
    if (response && response.data && response.data.token) {
      cookies.set("myToken", response.data.token, { path: "/" });
    }
    const { payload } = await jwtVerify(
      response.data.token,
      new TextEncoder().encode("secret")
    );
    return payload;
  } catch (error) {
    if (error.response.data.error === "user blocked")
      swal(
        "Error",
        "Tu usuario ha sido deshabilitado, por favor comunicate con tu jefe",
        "error"
      );
    else swal("Error", "Usuario o contraseña incorrectos", "error");
    return error.response.data.error;
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

export const postUserLogin = createAsyncThunk(
  "userLogin/postUserLogin",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/boss`,
        formData
      );
      swal(
        `Bienvenido a nuestra CRM ${response.data.name}`,
        "Tienes una prueba gratuita de 7 dias, luego deberas pagar para seguir usando la plataforma. Recuerda cambiar los datos de tu usuario 😁",
        "success"
      );
      return response;
    } catch (error) {
      swal(
        "Error",
        "Hubo un error al intentar registrarse. Por favor, inténtelo de nuevo.",
        "error"
      );
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
