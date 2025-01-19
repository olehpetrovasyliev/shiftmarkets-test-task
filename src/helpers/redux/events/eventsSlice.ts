import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, EventsState } from "../../types/types";

const initialState: EventsState = {
  events: [
    {
      id: "1",
      title: "React Workshop",
      description: "Learn React basics",
      date: "2025-01-20",
      time: "10:00",
      category: "Workshop",
    },
    {
      id: "2",
      title: "Team Meeting",
      description: "Discuss project updates",
      date: "2025-01-21",
      time: "14:00",
      category: "Meeting",
    },
    {
      id: "3",
      title: "Angular Bootcamp",
      description: "Deep dive into Angular",
      date: "2025-01-22",
      time: "09:00",
      category: "Workshop",
    },
    {
      id: "4",
      title: "Node.js Conference",
      description: "Node.js and backend technologies",
      date: "2025-01-23",
      time: "11:00",
      category: "Conference",
    },
    {
      id: "5",
      title: "Product Launch",
      description: "Launch new product features",
      date: "2025-01-24",
      time: "15:00",
      category: "Meeting",
    },
    {
      id: "6",
      title: "React Networking",
      description: "Networking for React developers",
      date: "2025-01-25",
      time: "12:00",
      category: "Meeting",
    },
    {
      id: "7",
      title: "JS Meetup",
      description: "Join the JavaScript community",
      date: "2025-01-26",
      time: "18:00",
      category: "Meeting",
    },
    {
      id: "8",
      title: "Design Thinking Workshop",
      description: "Learn design thinking principles",
      date: "2025-01-27",
      time: "10:00",
      category: "Webinar",
    },
    {
      id: "9",
      title: "Tech Summit",
      description: "Industry leaders discuss the future of tech",
      date: "2025-01-28",
      time: "09:30",
      category: "Webinar",
    },
    {
      id: "10",
      title: "Frontend Developer Meetup",
      description: "Frontend devs meet to discuss trends",
      date: "2025-01-29",
      time: "16:00",
      category: "Webinar",
    },
  ],
  currentPage: 1,
  eventsPerPage: 5,
  searchQuery: "",
  selectedCategory: "",
  selectedEvent: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      const { date, time } = action.payload;
      const isOverlapping = state.events.some(
        (event: Event) => event.date === date && event.time === time
      );

      if (!isOverlapping) {
        state.events.push({ ...action.payload, id: crypto.randomUUID() });
      } else {
        throw new Error("Event overlaps with an existing event.");
      }
    },

    editEvent: (state, action: PayloadAction<Event>) => {
      const index = state.events.findIndex(
        (event: Event) => event.id === action.payload.id
      );
      if (index !== -1) {
        state.events[index] = action.payload;
      } else {
        throw new Error("Event not found.");
      }
      state.selectedEvent = null;
    },

    deleteEvent: (state, action: PayloadAction<string>) => {
      const index = state.events.findIndex(
        (event: Event) => event.id === action.payload
      );
      if (index !== -1) {
        state.events.splice(index, 1);
      } else {
        throw new Error("Event not found.");
      }
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedEvent: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        state.selectedEvent = null;
      } else {
        const selectedEvent = state.events.find(
          (event) => event.id === action.payload
        );
        if (selectedEvent) {
          state.selectedEvent = selectedEvent;
        }
      }
    },
  },
});

export const {
  addEvent,
  editEvent,
  deleteEvent,
  setSearchQuery,
  setSelectedCategory,
  setPage,
  setSelectedEvent,
} = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
