import { useDispatch } from "react-redux";
import { addHabit } from "../../store/habits/habitsSlice";
import type { AppDispatch } from "../../store/store";

import css from "./AddHabitForm.module.css";

export const AddHabitForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (data: FormData) => {
    const title = data.get("title") as string;
    const validTitle = title.trim();

    if (validTitle) {
      dispatch(addHabit(validTitle));
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
