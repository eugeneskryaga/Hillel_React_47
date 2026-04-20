import { useDispatch } from "react-redux";
import type { Habit } from "../../types/types";
import css from "./HabitListItem.module.css";
import type { AppDispatch } from "../../store/store";
import {
  removeHabitOperation,
  toggleHabitOperation,
} from "../../store/habits/habitsOperations";

interface Props {
  habit: Habit;
}

export const HabitListItem = ({ habit }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <input
        onChange={() => dispatch(toggleHabitOperation(habit))}
        type="checkbox"
        checked={habit.completedToday}
        className={css.checkbox}
      />
      <p>{habit.title}</p>
      <button
        onClick={() => dispatch(removeHabitOperation(habit.id))}
        className={css.button}
      >
        Remove
      </button>
    </>
  );
};
