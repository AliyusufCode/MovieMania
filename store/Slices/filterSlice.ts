import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ganre: "",
  rating: 0,
  year: null,
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onGenreChange(state, action) {
      state.ganre = action.payload;
    },
    onGenreRating(state, action) {
      state.rating = action.payload;
    },
    onYearChange(state, action) {
      state.year = action.payload;
    },
  },
});

export const { onGenreChange, onGenreRating, onYearChange } =
  filterSlice.actions;

export default filterSlice.reducer;
