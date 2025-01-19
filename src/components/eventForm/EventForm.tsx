import { FC } from "react";
import { useForm } from "react-hook-form";
import { Event } from "../../helpers/types/types";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../helpers/redux/categories/categoriesSelectors";
import styles from "./EventForm.module.scss";

type EventFormProps = {
  initialValues?: Event;
  onSubmit: (data: Event) => void;
  heading: string;
};

const EventForm: FC<EventFormProps> = ({
  initialValues,
  onSubmit,
  heading,
}) => {
  const categories = useSelector(selectAllCategories);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Event>({
    defaultValues: initialValues || {
      id: "",
      title: "",
      description: "",
      date: "",
      time: "",
      category: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2>{heading}</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="title" className={styles.label}>
          Title:
        </label>
        <input
          id="title"
          type="text"
          className={styles.input}
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className={styles.errorMessage}>{errors.title.message}</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="description" className={styles.label}>
          Description:
        </label>
        <textarea
          id="description"
          className={styles.textarea}
          {...register("description")}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="date" className={styles.label}>
          Date:
        </label>
        <input
          id="date"
          type="date"
          className={styles.input}
          {...register("date", { required: "Date is required" })}
        />
        {errors.date && (
          <p className={styles.errorMessage}>{errors.date.message}</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="time" className={styles.label}>
          Time:
        </label>
        <input
          id="time"
          type="time"
          className={styles.input}
          {...register("time", { required: "Time is required" })}
        />
        {errors.time && (
          <p className={styles.errorMessage}>{errors.time.message}</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="category" className={styles.label}>
          Category:
        </label>
        <select
          id="category"
          className={styles.select}
          {...register("category", { required: "Category is required" })}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className={styles.errorMessage}>{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default EventForm;
