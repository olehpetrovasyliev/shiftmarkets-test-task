import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    // events: eventsReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
