import { createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchBrand, fetchCar } from "./operation";

const initialState = {
  items: [],
  page: 1,
  limit: 12,
  total: 0,
  favorites: [],
  isLoading: false,
  isError: false,
  brand: [],
  car: null,
  filters: {
    brand: "",
    price: null,
    from: "",
    to: "",
  },
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = {
        brand: "",
        price: null,
        from: "",
        to: "",
      };
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
      })

      .addCase(fetchBrand.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brand = action.payload;
      })
      .addCase(fetchBrand.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(fetchCar.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(fetchCar.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {
  resetCars,
  incrementPage,
  toggleFavorite,
  setFilters,
  resetFilters,
} = slice.actions;
export const carReducer = slice.reducer;
