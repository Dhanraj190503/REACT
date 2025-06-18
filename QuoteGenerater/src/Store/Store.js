import { configureStore } from '@reduxjs/toolkit';
import QuoteReducer from '../Slice/Slice';

// This file sets up the Redux store for the Quote Generator application.
// It imports the necessary functions from Redux Toolkit and the Quote reducer.
export const store = configureStore({
  reducer: {
    quote: QuoteReducer, // This is the reducer for managing quotes
  },
});
