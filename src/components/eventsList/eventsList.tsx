import { FC } from "react";
import { EventsList } from "../../helpers/types/types";
import EventCard from "../eventCard/EvenCard";
import styles from "./eventsList.module.scss";

type EventsListProps = { events: EventsList };

const EventCardsList: FC<EventsListProps> = ({ events }) => {
  return (
    <ul className={styles.eventsList}>
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventCardsList;
