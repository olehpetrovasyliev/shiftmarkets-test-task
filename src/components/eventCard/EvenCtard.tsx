import { FC } from "react";
import { Event } from "../../helpers/types/types";
import { useDispatch } from "react-redux";
import {
  deleteEvent,
  setSelectedEvent,
} from "../../helpers/redux/events/eventsSlice";

type EventProps = { event: Event };

const EventCard: FC<EventProps> = ({ event }) => {
  const dispatch = useDispatch();

  const handleEditClick = (eventId: string) => {
    dispatch(setSelectedEvent(eventId));
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
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {event.date} <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Category:</strong> {event.category}
      </p>
      <div>
        <button onClick={() => handleEditClick(event.id)}>Edit</button>
        <button
          onClick={() => handleDeleteClick(event.id)}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default EventCard;
