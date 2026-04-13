import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Habit } from "../types/types";

interface HabitStore {
  habits: Habit[];
  addHabit: (title: Habit["title"]) => void;
  removeHabit: (idToDelete: Habit["id"]) => void;
  toggleHabit: (id: Habit["id"]) => void;
}

export const useHabitStore = create<HabitStore>()(
  persist(
    set => {
      return {
        habits: [],
        addHabit: title =>
          set(state => {
            const newHabit: Habit = {
              id: crypto.randomUUID(),
              title,
              completedToday: false,
            };

            return {
              habits: [...state.habits, newHabit],
            };
          }),
        removeHabit: idToDelete => {
          set(state => ({
            habits: state.habits.filter(habit => habit.id !== idToDelete),
          }));
        },
        toggleHabit: idToToggle => {
          set(state => ({
            habits: state.habits.map(habit =>
              habit.id === idToToggle
                ? { ...habit, completedToday: !habit.completedToday }
                : habit,
            ),
          }));
        },
      };
    },
    { name: "habits" },
  ),
);

export const selectHabits = (state: HabitStore) => state.habits;
export const selectAddHabit = (state: HabitStore) => state.addHabit;
export const selectRemoveHabit = (state: HabitStore) => state.removeHabit;
export const selectToggleHabit = (state: HabitStore) => state.toggleHabit;
