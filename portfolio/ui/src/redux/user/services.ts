import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
})