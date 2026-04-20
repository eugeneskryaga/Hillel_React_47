import { useDispatch, useSelector } from "react-redux";
import { AddHabitForm } from "../AddHabitForm/AddHabitForm";
import { HabitList } from "../HabitList/HabitList";
import css from "./App.module.css";
import {
  selectIsError,
  selectIsLoading,
} from "../../store/habits/habitsSelectors";
import { useEffect } from "react";
import type { AppDispatch } from "../../store/store";
import { getHabitsOperation } from "../../store/habits/habitsOperations";

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHabitsOperation());
  }, [dispatch]);

  return (
    <main className={css.app}>
      <AddHabitForm />
      <hr />
      <HabitList />
      {isLoading && <h1>Loading</h1>}
      {isError && <p>It's an error.</p>}
    </main>
  );
};
