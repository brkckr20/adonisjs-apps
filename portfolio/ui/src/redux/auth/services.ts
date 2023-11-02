import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

interface LoginParameters{
    username: string,
    password : string
}

export const loginUser = createAsyncThunk("user/loginUser", async (values : LoginParameters) => {
    const response = await axios.post(`${API_URL}/login`,values);
    return response.data;
})
