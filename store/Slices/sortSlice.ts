import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: "",
  selectedRating: 0,
  selectedYear: "1020-20242",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSelectedGenre(state, action) {
      state.selectedGenre = action.payload;
    },
    setSelectedRating(state, action) {
      state.selectedRating = action.payload;
    },
    setSelectedYear(state, action) {
      state.selectedYear = action.payload;
    },
  },
});

export const { setSelectedGenre, setSelectedRating, setSelectedYear } =
  sortSlice.actions;

export default sortSlice.reducer;
