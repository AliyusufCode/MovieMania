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
import styles from "./sort.module.scss";
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
    // { id: 0, title: "Все" },
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
    <div className={styles.sortContainer}>
      <div style={{ display: "flex" }}>
        <div className={styles.contentSelect}>
          <h4>Жанр</h4>
          <select
            value={selectedGenre}
            className={styles.select}
            onChange={handleGenreChange}
          >
            <option value="">
              {selectedGenre
                ? "Всe" || "Все" || selectedGenre
                : "Все жанры" || "Все"}
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.contentSelect}>
          <h4>Рейтинг</h4>
          <select
            value={selectedRating}
            className={styles.select}
            onChange={handleRatingChange}
          >
            <option value="">Все</option>
            {ratings.map((rating) => (
              <option key={rating.id} value={rating.id}>
                {rating.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.contentSelect}>
          <h4>Годы выпуска</h4>
          <select
            value={selectedYear}
            className={styles.select}
            onChange={handleYearChange}
          >
            <option value="">
              {selectedYear ? "Все" || selectedYear : "Все годы" || "Все"}
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
