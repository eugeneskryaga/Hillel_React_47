import { selectAddHabit, useHabitStore } from "../../store/habitStore";
import css from "./AddHabitForm.module.css";

export const AddHabitForm = () => {
  const addHabit = useHabitStore(selectAddHabit);

  const handleSubmit = (data: FormData) => {
    const title = data.get("title") as string;
    const validTitle = title.trim();

    if (validTitle) {
      addHabit(title);
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
