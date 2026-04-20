import { useSelector } from "react-redux";
import { HabitListItem } from "../HabitListItem/HabitListItem";
import {
  selectHabits,
  selectIsLoading,
} from "../../store/habits/habitsSelectors";

import css from "./HabitList.module.css";

export const HabitList = () => {
  const habits = useSelector(selectHabits);
  const isLoading = useSelector(selectIsLoading);

  return habits.length > 0 || isLoading ? (
    <ul className={css.list}>
      {habits.map(habit => (
        <li key={habit.id}>
          <HabitListItem habit={habit} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There is no habits yet.</p>
  );
};
