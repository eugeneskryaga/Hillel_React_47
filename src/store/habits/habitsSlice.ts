import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addHabitOperation,
  getHabitsOperation,
  removeHabitOperation,
  toggleHabitOperation,
} from "./habitsOperations";
import type { Habit } from "../../types/types";

export interface HabitsState {
  habits: Habit[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: HabitsState = {
  habits: [],
  isLoading: false,
  isError: false,
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getHabitsOperation.fulfilled, (state, { payload }) => {
        state.habits = payload;
      })
      .addCase(removeHabitOperation.fulfilled, (state, { payload }) => {
        state.habits = state.habits.filter(item => item.id !== payload.id);
      })
      .addCase(addHabitOperation.fulfilled, (state, { payload }) => {
        state.habits.push(payload);
      })
      .addCase(toggleHabitOperation.fulfilled, (state, { payload }) => {
        const index = state.habits.findIndex(item => item.id === payload.id);
        if (index !== -1) {
          state.habits[index] = payload;
        }
      })
      .addMatcher(
        isAnyOf(
          getHabitsOperation.pending,
          removeHabitOperation.pending,
          addHabitOperation.pending,
          toggleHabitOperation.pending,
        ),
        state => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          getHabitsOperation.rejected,
          removeHabitOperation.rejected,
          addHabitOperation.rejected,
          toggleHabitOperation.rejected,
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        },
      )
      .addMatcher(
        isAnyOf(
          getHabitsOperation.fulfilled,
          removeHabitOperation.fulfilled,
          addHabitOperation.fulfilled,
          toggleHabitOperation.fulfilled,
        ),
        state => {
          state.isLoading = false;
          state.isError = false;
        },
      ),
});

export default habitsSlice.reducer;
