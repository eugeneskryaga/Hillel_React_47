import type { RootState } from "../../store/store";

export const selectHabits = (state: RootState) => state.habits.habits;
export const selectIsLoading = (state: RootState) => state.habits.isLoading;
export const selectIsError = (state: RootState) => state.habits.isError;
