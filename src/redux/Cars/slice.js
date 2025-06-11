import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operation";

const initialState = {
  items: [],
  page: 1,
  limit: 16,
  total: 0,
  favorites: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
    toggleFavorite(state, action) {
      const carId = action.payload;
      if (state.favorites.includes(carId)) {
        state.favorites = state.favorites.filter((id) => id !== carId);
      } else {
        state.favorites.push(carId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload.cars];
        state.total = action.payload.total;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetCars, incrementPage, toggleFavorite } = slice.actions;
export const carReducer = slice.reducer;
