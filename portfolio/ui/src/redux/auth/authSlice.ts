import { createSlice } from "@reduxjs/toolkit";
import {  loginUser } from "../../api";

interface AuthState{
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    token: string | null | any,
    isLoggedIn: boolean,
    loggedUser: any,
    errorMessage: string,
    isError : boolean
}

const token = localStorage.getItem("token");

const initialState : AuthState = {
    token: token || "",
    status: "idle",
    isLoggedIn: token ? true : false,
    loggedUser: {},
    errorMessage: "",
    isError : false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.isLoggedIn = false;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "pending";            
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                if (action.payload.code !== 200) {
                    state.isError = true
                    state.errorMessage = action.payload.message
                } else {
                    state.isError = false;
                    state.errorMessage = "";
                    localStorage.setItem("token", action.payload.token.token);
                    state.isLoggedIn = true;
                    state.status = "succeeded"
                }
            })
    },
})

export const { logout } = authSlice.actions;

export default authSlice.reducer