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
import { appReducer } from "./app/slice";
import { carReducer } from "./Cars/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [
    "accessToken",
    "isAddTransaction",
    "isEditTransaction",
    "isDeleteTransaction",
    "isLogOut",
    "data",
    "timestamp",
  ],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carReducer),
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
