import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import swal from "sweetalert";
import { jwtVerify } from "jose";


export const postUserInfo = createAsyncThunk(
  "userInfo/postUserInfo",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://crm.up.railway.app/api/boss",
        userInfo
      );
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
      const response = await axios.post(
        "https://crm2.up.railway.app/api/boss",
        formData
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
        "https://crm2.up.railway.app/api/login",
        loginUser,
        { withCredentials: true }
      );
      console.alert(response.data);
    } catch (error) {
      console.alert(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const setUser = createAsyncThunk(
  'user/setUser',
  async (user, thunkAPI) => {
    try {
      return user;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

export const login = createAsyncThunk(
  'login/login',
  async  (data) => {
  const { email , password}= data;
  try {
    const response = await axios.post(
      "https://crm2.up.railway.app/api/login",
      { email, password },
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
   return payload
  } catch (error) {
    swal("Error", "Usuario o contraseña incorrectos", "error");
  }
});