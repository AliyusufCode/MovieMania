import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slices/filterSlice";
import sortReducer from "./Slices/sortSlice";
const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
  },
});

export default store;
