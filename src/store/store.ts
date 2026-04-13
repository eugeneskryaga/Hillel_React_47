import { configureStore } from "@reduxjs/toolkit";
import habitsReducer, { type HabitsState } from "./habits/habitsSlice";
import {
  type PersistConfig,
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

const persistConfig: PersistConfig<HabitsState> = {
  key: "habits",
  storage,
};

const persistedHabitReducer = persistReducer(persistConfig, habitsReducer);

export const store = configureStore({
  reducer: {
    habits: persistedHabitReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
