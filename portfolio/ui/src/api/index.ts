import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../config";

interface LoginParameters{
    username: string,
    password : string
}

axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const fetchUserInfo = async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
}

export const test = async () => {
    const response = await axios.get(`${API_URL}/user`);
    return console.log(response.data)
}

export const loginUser = createAsyncThunk("user/loginUser", async (values : LoginParameters) => {
    const response = await axios.post(`${API_URL}/login`,values);
    return response.data;
})
