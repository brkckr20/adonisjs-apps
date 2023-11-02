import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./services";

interface AuthState{
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    token: string | null,
    isLoggedIn: boolean,
    loggedUser: any,
    errorMessage: string,
    isError : boolean
}

const initialState : AuthState = {
    token: "",
    status: "idle",
    isLoggedIn: false,
    loggedUser: {},
    errorMessage: "",
    isError : false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
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
                    state.isError = false
                }
            })
    },
})

export default authSlice.reducer