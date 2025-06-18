import {configureStore} from "@reduxjs/toolkit";
import spsReducer from '../Slice/Slice'

// Configure and store the from Slice

export const store = configureStore({
    reducer:{
            sps: spsReducer,    // call from Slice.js
    }
});
