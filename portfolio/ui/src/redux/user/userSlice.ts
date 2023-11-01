import { createSlice } from '@reduxjs/toolkit'
import {  User} from '../../interfaces';
import { fetchUser } from './services';
import { RootState } from '../store';

const initialState: User = {
    token: "",
    loading: "idle",
    id: 1,
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoggedIn = false
                state.loading = "succeeded";
                state.token = action.payload.token;
                state.id = action.payload.id;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.isLoggedIn = false;
                console.log("reddedildi")
        })
    }
});

export const getStatus = (state : RootState) => state.user.loading;
export const getToken = (state: any) => state.user.token;
export const getId = (state: RootState) => state.user.id;

export default userSlice.reducer;