import axios from "axios";
import { API_URL } from "../config";

export const fetchUserInfo = async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
}