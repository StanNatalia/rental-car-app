import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "cars/fetchData",
  async ({ page, limit }, { getState, rejectWithValue }) => {
    try {
      const { filters } = getState().cars;
      console.log("Active filters:", filters);

      const params = new URLSearchParams({
        page,
        limit,
      });

      if (filters.brand) params.append("brand", filters.brand);
      if (filters.price && filters.price.value) {
        params.append("price_lte", String(filters.price.value));
      }

      if (filters.from) {
        params.append("mileage_gte", String(Number(filters.from)));
      }

      if (filters.to) {
        params.append("mileage_lte", String(Number(filters.to)));
      }

      const { data } = await axios.get(
        `https://car-rental-api.goit.global/cars?${params.toString()}`
      );

      return {
        cars: data.cars,
        total: data.totalCars,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBrand = createAsyncThunk(
  "brand/fetchBrand",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://car-rental-api.goit.global/brands"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCar = createAsyncThunk(
  "car/fetchCar",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://car-rental-api.goit.global/cars/${id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
