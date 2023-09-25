import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User} from '../../interfaces';

const initialState: User = {
    ad_soyad: "",
    adres: "",
    unvan: "",
    mail: "",
    resim : ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    },
    extraReducers : {}
});

export default userSlice.reducer;