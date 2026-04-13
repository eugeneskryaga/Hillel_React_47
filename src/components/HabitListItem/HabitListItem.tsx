import { useDispatch } from "react-redux";
import type { Habit } from "../../types/types";
import css from "./HabitListItem.module.css";
import type { AppDispatch } from "../../store/store";
import { removeHabit, toggleHabit } from "../../store/habits/habitsSlice";

interface Props {
  habit: Habit;
}

export const HabitListItem = ({ habit }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <input
        onChange={() => dispatch(toggleHabit(habit.id))}
        type="checkbox"
        checked={habit.completedToday}
        className={css.checkbox}
      />
      <p>{habit.title}</p>
      <button
        onClick={() => dispatch(removeHabit(habit.id))}
        className={css.button}
      >
        Remove
      </button>
    </>
  );
};
