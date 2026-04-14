import { configureStore } from "@reduxjs/toolkit";
import habitsReducer, { type HabitsState } from "./habits/habitsSlice";
import {
  type PersistConfig,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig<HabitsState> = {
  key: "habits",
  storage: (storage as any).default,
};

const persistedHabitReducer = persistReducer(persistConfig, habitsReducer);

export const store = configureStore({
  reducer: {
    habits: persistedHabitReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
