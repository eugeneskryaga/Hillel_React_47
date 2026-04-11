import { AddHabitForm } from "../AddHabitForm/AddHabitForm";
import { HabitList } from "../HabitList/HabitList";
import css from "./App.module.css";

export const App = () => {
  return (
    <main className={css.app}>
      <AddHabitForm />
      <hr />
      <HabitList />
    </main>
  );
};
