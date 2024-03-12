import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userDetail: null,
    status: false
}


const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers: {
        login: (state, action) => {
            state.userDetail = action.payload.user,
            state.status = true 
        },
        logout: (state, action) => {
            state.userDetail = null,
            state.status = false 
        }
    }
})

export const { login, logout} = authSlice.actions;

export default authSlice.reducer;