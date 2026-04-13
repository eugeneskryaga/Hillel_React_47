import type { RootState } from "../store";

export const selectHabits = (state: RootState) => state.habits.habits;
