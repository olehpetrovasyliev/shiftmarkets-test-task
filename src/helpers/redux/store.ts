import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice";
import { eventsReducer } from "./events/eventsSlice";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["events"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  events: eventsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
