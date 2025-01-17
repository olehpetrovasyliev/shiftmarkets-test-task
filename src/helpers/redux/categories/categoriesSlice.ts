import { createSlice } from "@reduxjs/toolkit";
import { CategoriesList } from "../../types/types";

const mockCategories: CategoriesList = [
  { id: "1", name: "Conference" },
  { id: "2", name: "Meeting" },
  { id: "3", name: "Workshop" },
  { id: "4", name: "Webinar" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: mockCategories,
  reducers: {
    getCategories: (state) => state,
  },
});

export const categoriesReducer = categoriesSlice.reducer;
