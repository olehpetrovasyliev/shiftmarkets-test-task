import { FC, useState } from "react";
import { Event } from "../../helpers/types/types";
import { useDispatch } from "react-redux";
import { deleteEvent, editEvent } from "../../helpers/redux/events/eventsSlice";
import EventForm from "../eventForm/EventForm";
import styles from "./EventCard.module.scss";

type EventProps = { event: Event };

const EventCard: FC<EventProps> = ({ event }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (data: Event) => {
    dispatch(editEvent(data));
    setIsEditing(false);
  };

  const handleDeleteClick = (eventId: string) => {
    dispatch(deleteEvent(eventId));
  };

  return (
    <li key={event.id} className={styles.eventCard}>
      {isEditing ? (
        <EventForm
          initialValues={event}
          onSubmit={handleSubmit}
          heading={`Edit ${event.title}`}
        />
      ) : (
        <>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>
            <strong>Date:</strong> {event.date} <strong>Time:</strong>{" "}
            {event.time}
          </p>
          <p>
            <strong>Category:</strong> {event.category}
          </p>
          <div className={styles.eventCard__buttonsWrapper}>
            <button onClick={() => handleEditClick()}>Edit</button>
            <button onClick={() => handleDeleteClick(event.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default EventCard;
