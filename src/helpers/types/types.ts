export type CategoriesList = string[];

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
};

export type EventsList = Event[];

export type EventsState = {
  events: Event[];
  currentPage: number;
  eventsPerPage: number;
  searchQuery: string;
  selectedCategory: string;
  selectedEvent: Event | null;
};
