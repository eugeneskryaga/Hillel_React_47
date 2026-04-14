import type { RootState } from "../../store/store";

export const selectHabits = (state: RootState) => state.habits.habits;
