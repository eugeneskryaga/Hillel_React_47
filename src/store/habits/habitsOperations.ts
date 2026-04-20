import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addHabit,
  getHabits,
  removeHabit,
  toggleHabit,
} from "../../services/habitsApi";
import type { Habit } from "../../types/types";

export const getHabitsOperation = createAsyncThunk<Habit[], void>(
  "habits/getHabits",
  async (_, { rejectWithValue }) => {
    try {
      const habits = await getHabits();
      return habits;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const removeHabitOperation = createAsyncThunk<Habit, Habit["id"]>(
  "habits/removeHabit",
  async (id, { rejectWithValue }) => {
    try {
      const habit = await removeHabit(id);
      return habit;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addHabitOperation = createAsyncThunk<Habit, Habit>(
  "habits/addHabit",
  async (newHabit, { rejectWithValue }) => {
    try {
      const habit = await addHabit(newHabit);
      return habit;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const toggleHabitOperation = createAsyncThunk<Habit, Habit>(
  "habits/toggleHabit",
  async (habitToToggle, { rejectWithValue }) => {
    try {
      const habit = await toggleHabit(habitToToggle);
      return habit;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
