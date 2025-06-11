import axios from "axios";

const appApiConfig = {
  baseURL: "https://car-rental-api.goit.global",
  timeout: 4000,
};

export const appApi = axios.create(appApiConfig);
