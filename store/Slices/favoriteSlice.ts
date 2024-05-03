import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [] as any[],
  moviesId: [] as any[],
  moviesInfo: {} as any[],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movieToAdd = action.payload;
      const existingMovieIndex = state.movies.findIndex(
        (movie) => movie.id === movieToAdd.id
      );
      if (existingMovieIndex !== -1) {
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== movieToAdd.id),
        };
      } else {
        return {
          ...state,
          movies: [...state.movies, movieToAdd],
        };
      }
    },
    addFavorite: (state, action) => {
      state.moviesId.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.moviesId = state.moviesId.filter(
        (movieId) => movieId !== action.payload
      );
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setMoviesInfo: (state, action) => {
      state.moviesInfo = action.payload;
    },
  },
});
export const { addToFavorites, addFavorite, removeFavorite, setMoviesInfo } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
