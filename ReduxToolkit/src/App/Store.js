import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/TodoSlice';

export const store = configureStore({
    reducer: todoReducer,
})