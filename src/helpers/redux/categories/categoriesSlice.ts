import { createSlice } from "@reduxjs/toolkit";
import { CategoriesList } from "../../types/types";

const mockCategories: CategoriesList = [
  "Conference",
  "Meeting",
  "Workshop",
  "Webinar",
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { allCategories: mockCategories },
  reducers: {},
});

export const categoriesReducer = categoriesSlice.reducer;
