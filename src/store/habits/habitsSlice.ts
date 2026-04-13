import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Habit } from "../../types/types";

export interface HabitsState {
  habits: Habit[];
}

const initialState: HabitsState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit["title"]>) => {
      const habit = {
        id: crypto.randomUUID(),
        title: action.payload,
        completedToday: false,
      };
      state.habits.push(habit);
    },
    removeHabit: (state, action: PayloadAction<Habit["id"]>) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload);
    },
    toggleHabit: (state, action: PayloadAction<Habit["id"]>) => {
      state.habits.map(habit =>
        habit.id === action.payload
          ? (habit.completedToday = !habit.completedToday)
          : habit,
      );
    },
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
