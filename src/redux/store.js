import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carReducer } from "./Cars/slice";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  whitelist: ["favorites", "brands", "cars", "catalog"],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
