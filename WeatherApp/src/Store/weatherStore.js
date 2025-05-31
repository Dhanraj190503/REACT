import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from '../Slice/Slice.js'

export const store = configureStore({
    reducer:{
        weather: weatherSlice,
    }
});