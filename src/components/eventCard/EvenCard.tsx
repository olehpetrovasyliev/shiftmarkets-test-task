import { FC, useState } from "react";
import { Event } from "../../helpers/types/types";
import { useDispatch } from "react-redux";
import {
  deleteEvent,
  editEvent,
  setSelectedEvent,
} from "../../helpers/redux/events/eventsSlice";
import EventForm from "../eventForm/EventForm";

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
    <li
      key={event.id}
      style={{
        marginBottom: "15px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      {isEditing ? (
        <EventForm initialValues={event} onSubmit={handleSubmit} />
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
          <div>
            <button onClick={() => handleEditClick()}>Edit</button>
            <button
              onClick={() => handleDeleteClick(event.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default EventCard;
