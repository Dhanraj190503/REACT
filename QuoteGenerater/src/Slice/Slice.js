import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch a random Game of Thrones quote
// This function fetches a random quote from the Game of Thrones Quotes API
// It handles both successful responses and errors, returning the quote data or an error message.
export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Failed to fetch quote');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error occurred');
    }
  }
);

//rejectWithValue is used to return a custom error message if the fetch fails, either due to network issues or if the API returns an error response. This allows the application to handle errors gracefully and provide feedback to the user.
// The fetchQuote function is an asynchronous action that can be dispatched to fetch a quote from the API. It uses createAsyncThunk from Redux Toolkit to handle the asynchronous operation and manage the loading and error states automatically.

// Quote slice
// This slice manages the state of quotes in the application, including loading, error handling, and storing the fetched quote.
const Quote = createSlice({
  name: 'quote',
  initialState: {
    value: null,
    error: null,
    loading: false,
  },
  reducers: {
    setQuote: (state, action) => {
      state.value = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true; // Set loading to true when the fetch starts
        state.error = null; // Clear any previous error
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the fetch is complete
        state.value = action.payload; // Store the fetched quote. Fetch from the API 'data' property
        state.error = null; // Clear any previous error
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the fetch fails
        state.error = action.payload || action.error.message || 'Something went wrong'; // Store the error message. 
      });
  },
});

export const { setQuote } = Quote.actions;
export default Quote.reducer;
