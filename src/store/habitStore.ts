import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Habit } from "../types/types";

interface HabitStore {
  habits: Habit[];
  addHabit: (newHabit: Habit) => void;
  removeHabit: (idToDelete: Habit["id"]) => void;
  changeHabitStatus: (id: Habit["id"]) => void;
}

export const useHabitStore = create<HabitStore>()(
  persist(
    set => {
      return {
        habits: [],
        addHabit: newHabit =>
          set(state => ({
            habits: [...state.habits, newHabit],
          })),
        removeHabit: idToDelete => {
          set(state => ({
            habits: state.habits.filter(habit => habit.id !== idToDelete),
          }));
        },
        changeHabitStatus: idToChangeStatus => {
          set(state => ({
            habits: state.habits.map(habit =>
              habit.id === idToChangeStatus
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
export const selectChangeHabitStatus = (state: HabitStore) =>
  state.changeHabitStatus;
