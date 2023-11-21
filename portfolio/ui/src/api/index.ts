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

export const getPublicUser = async () => {
  const response = await axios.get(`${API_URL}/getPublicUser`);
    return response.data;
}

export const updateUser = async (userData : any) => {
  const response = await axios.put(`${API_URL}/user`, userData);
  return response.data;
}

export const getSkills = async () => {
  const response = await axios.get(`${API_URL}/skills`);
  return response.data;
}

export const addSkill = async (data: any) => {
  const response = await axios.post(`${API_URL}/skill`, data);
  return response.data;
}

export const deleteSkill = async (id: number) => {
  const response = await axios.delete(`${API_URL}/skill/${id}`);
  return response.data;
}

export const getSocialMedias = async () => {
  const response = await axios.get(`${API_URL}/socialmedia`);
  return response.data;
}


export const addJobAndEdu = async (data: any) => {
  const response = await axios.post(`${API_URL}/job-and-edu`, data);
  return response.data;
}

export const getJobAndEdu = async () => {
  const response = await axios.get(`${API_URL}/job-and-edu`);
  return response.data;
}

export const getOneJobAndEdu = async (id :any) => { 
  const response = await axios.get(`${API_URL}/job-and-edu/${id}`);
  return response.data;
}

export const sendMessages = async (data:any) => {
  const response = await axios.post(`${API_URL}/messages`,data);
  return response.data;
}

export const getMessages = async () => {
  const response = await axios.get(`${API_URL}/messages`);
  return response.data;
}

export const updateMessage = async (id:any) => {
  const response = await axios.put(`${API_URL}/messages/${id}`);
  return response.data;
}

export const loginUser = createAsyncThunk("user/loginUser", async (values : LoginParameters) => {
    const response = await axios.post(`${API_URL}/login`,values);
    return response.data;
})
