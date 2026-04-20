import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";

import css from "./AddHabitForm.module.css";
import { addHabitOperation } from "../../store/habits/habitsOperations";
import type { Habit } from "../../types/types";

export const AddHabitForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (data: FormData) => {
    const title = data.get("title") as string;
    const validTitle = title.trim();

    if (validTitle) {
      const habit: Habit = {
        id: crypto.randomUUID(),
        title: validTitle,
        completedToday: false,
      };
      dispatch(addHabitOperation(habit));
    }
  };

  return (
    <form
      action={handleSubmit}
      className={css.form}
    >
      <input
        type="text"
        name="title"
        placeholder="Enter new habit"
      />
      <button>Add</button>
    </form>
  );
};
