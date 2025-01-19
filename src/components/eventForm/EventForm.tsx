import { FC } from "react";
import { useForm } from "react-hook-form";
import { Event } from "../../helpers/types/types";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../helpers/redux/categories/categoriesSelectors";

type EventFormProps = {
  initialValues?: Event;
  onSubmit: (data: Event) => void;
};

const EventForm: FC<EventFormProps> = ({ initialValues, onSubmit }) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register("description")} />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          {...register("date", { required: "Date is required" })}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="time"
          {...register("time", { required: "Time is required" })}
        />
        {errors.time && <p>{errors.time.message}</p>}
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          {...register("category", { required: "Category is required" })}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
