import {
  selectToggleHabit,
  selectRemoveHabit,
  useHabitStore,
} from "../../store/habitStore";
import type { Habit } from "../../types/types";
import css from "./HabitListItem.module.css";

interface Props {
  habit: Habit;
}

export const HabitListItem = ({ habit }: Props) => {
  const deleteHabit = useHabitStore(selectRemoveHabit);
  const toggleHabit = useHabitStore(selectToggleHabit);

  return (
    <>
      <input
        onChange={() => toggleHabit(habit.id)}
        type="checkbox"
        checked={habit.completedToday}
        className={css.checkbox}
      />
      <p>{habit.title}</p>
      <button
        onClick={() => deleteHabit(habit.id)}
        className={css.button}
      >
        Remove
      </button>
    </>
  );
};
