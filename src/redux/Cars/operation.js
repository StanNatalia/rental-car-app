import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "cars/fetchData",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://car-rental-api.goit.global/cars?page=${page}&limit=${limit}`
      );
      return {
        cars: data.cars,
        total: data.totalCars,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
