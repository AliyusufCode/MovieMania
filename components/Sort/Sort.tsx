"use client";

import {
  onGenreChange,
  onGenreRating,
  onYearChange,
} from "@/store/Slices/filterSlice";
import {
  setSelectedGenre,
  setSelectedRating,
  setSelectedYear,
} from "@/store/Slices/sortSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Sort = () => {
  const genres = [
    "Приключения",
    "Триллер",
    "Фантастика",
    "Боевик",
    "Комедия",
    "Семейный",
    "Криминал",
    "Биография",
    "Ужасы",
    "Детектив",
    "Вестерн",
  ];
  const ratings = [
    { id: 0, title: "Все" },
    { id: 5, title: "Больше 5" },
    { id: 6, title: "Больше 6" },
    { id: 7, title: "Больше 7" },
    { id: 8, title: "Больше 8" },
    { id: 9, title: "Больше 9" },
  ];
  const years = [
    "2020-2024",
    "2010-2020",
    "2000-2010",
    "1990-2000",
    "1980-1990",
    "1970-1980",
  ];

  const dispath = useDispatch();

  const handleGenreChange = (e: any) => {
    const selectedGenre = e.target.value;
    dispath(setSelectedGenre(selectedGenre));
    dispath(onGenreChange(selectedGenre));
  };
  const selectedGenre = useSelector((store: any) => store.sort.selectedGenre);

  const selectedRating = useSelector((store: any) => store.sort.selectedRating);

  const handleRatingChange = (e: any) => {
    const selectedRating = e.target.value;
    dispath(setSelectedRating(selectedRating));
    dispath(onGenreRating(selectedRating));
  };

  const selectedYear = useSelector((store: any) => store.sort.selectedYear);

  const handleYearChange = (e: any) => {
    const selectedYear = e.target.value;
    dispath(setSelectedYear(selectedYear));
    dispath(onYearChange(selectedYear));
  };
  useEffect(() => {
    dispath(setSelectedGenre(selectedGenre));
    dispath(onGenreChange(selectedGenre));
    dispath(setSelectedYear(selectedYear));
    dispath(onYearChange(selectedYear));
  }, [selectedGenre]);
  return (
    <div>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">
          {selectedGenre ? "Жанры" || "Все" || selectedGenre : "Жанры" || "Все"}
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select value={selectedRating} onChange={handleRatingChange}>
        <option value="">Рейтинг</option>
        {ratings.map((rating) => (
          <option key={rating.id} value={rating.id}>
            {rating.title}
          </option>
        ))}
      </select>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">
          {selectedYear
            ? "Годы выпуска" || "Все" || selectedYear
            : "Годы выпуска" || "Все"}
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
