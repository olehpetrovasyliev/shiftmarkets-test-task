import { FC } from "react";
import { EventsList } from "../../helpers/types/types";
import EventCard from "../eventCard/evenCtard";

type EventsListProps = { events: EventsList };

const EventCardsList: FC<EventsListProps> = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventCardsList;
