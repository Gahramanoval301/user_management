import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reduxSlices/usersSlice";


export const store = configureStore({
    reducer:{
        users:usersReducer
    }
})