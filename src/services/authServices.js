import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postUserInfo = createAsyncThunk(
  'userInfo/postUserInfo',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post('https://crm.up.railway.app/api/boss', userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postUserLogin = createAsyncThunk(
  'userLogin/postUserLogin',
  async (userLogin, thunkAPI) => {
    try {
      const response = await axios.post('https://crm.up.railway.app/api/login', userLogin);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
