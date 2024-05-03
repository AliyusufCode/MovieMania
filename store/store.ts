import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slices/filterSlice";
import sortReducer from "./Slices/sortSlice";
import favoritesReducer from "./Slices/favoriteSlice";
const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    favorites: favoritesReducer,
  },
});

export default store;
