import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Slice/Slice.js'

// Configure and store the from Slice

export const store = configureStore({
    reducer:{
        counter: counterReducer,    // call from Slice.js
    }
})