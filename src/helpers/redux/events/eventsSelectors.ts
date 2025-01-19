import { RootState } from "../store";

export const selectFilteredEvents = (state: RootState) => {
  const { events, searchQuery, selectedCategory, currentPage, eventsPerPage } =
    state.events;

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? event.category === selectedCategory : true)
    );
  });

  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;

  return filteredEvents.slice(startIndex, endIndex);
};

export const selectTotalPages = (state: RootState) => {
  const { events, searchQuery, selectedCategory, eventsPerPage } = state.events;

  const filteredEvents = events.filter((event) => {
    return (
      (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory ? event.category === selectedCategory : true)
    );
  });

  return Math.ceil(filteredEvents.length / eventsPerPage);
};

export const selectCurrentPage = (state: RootState) => state.events.currentPage;
