import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const key = '0c7e0441f8a8ae593a4f5917e28c3445';

// Async thunk to fetch weather
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
      );
      const data = await response.json();

      if (!response.ok) {
        // API returned an error (e.g., city not found)
        return rejectWithValue(data.message || 'Failed to fetch weather data');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

// Weather slice
const WeatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: 'India',         // default city
    weatherData: null,      // stores fetched weather data
    error: null,            // stores error messages
    loading: false,         // shows loading state
  },
  reducers: {
    setCity: (state, action) => {
      state.value = action.payload;
      state.error = null; // clear previous error on new search
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.weatherData = null;
        state.error = action.payload || 'Something went wrong';
      });
  }
});

export const { setCity } = WeatherSlice.actions;
export default WeatherSlice.reducer;
