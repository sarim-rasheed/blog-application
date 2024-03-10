import { configureStore } from "@reduxjs/toolkit";
import authReducers from '../features/Auth/authSlice'


const store = configureStore({
    reducer: {
        auth: authReducers
    }
});


export default store;