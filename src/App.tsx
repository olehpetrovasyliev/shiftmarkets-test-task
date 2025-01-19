import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentPage,
  selectFilteredEvents,
  selectTotalPages,
} from "./helpers/redux/events/eventsSelectors";
import {
  setSelectedCategory,
  setSearchQuery,
  setPage,
  addEvent,
} from "./helpers/redux/events/eventsSlice";
import EventCardsList from "./components/eventsList/eventsList";
import { selectAllCategories } from "./helpers/redux/categories/categoriesSelectors";
import EventForm from "./components/eventForm/EventForm";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const events = useSelector(selectFilteredEvents);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(e.target.value));
    dispatch(setPage(1));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(setPage(1));
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            onChange={handleSearchChange}
            placeholder="Search events..."
          />
        </div>
        <div>
          <label htmlFor="category">Filter by category:</label>
          <select id="category" onChange={handleCategoryChange}>
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <EventCardsList events={events} />
      <div className="paginationContainer">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              index + 1 === currentPage
                ? " paginationBtn active"
                : "paginationBtn"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
      <EventForm
        onSubmit={(data) => dispatch(addEvent(data))}
        heading="Add event"
      />
    </div>
  );
}

export default App;
