import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
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
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={handleSearchChange}
          style={{ marginLeft: "10px", padding: "5px" }}
          placeholder="Search events..."
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category">Filter by category:</label>
        <select
          id="category"
          onChange={handleCategoryChange}
          style={{ marginLeft: "10px" }}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <EventCardsList events={events} />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <EventForm onSubmit={(data) => dispatch(addEvent(data))} />
    </div>
  );
}

export default App;
