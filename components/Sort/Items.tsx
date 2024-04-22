"use client";
import React from "react";
import { data } from "@/api/data";
import styles from "./sort.module.scss";
import MovieItem from "../RecommendMovie/MovieItem";
import Link from "next/link";
import { useSelector } from "react-redux";

type Props = {
  filter: string;

  selectedYear?: any;
};
const Items: React.FC<Props> = ({ filter }) => {
  const checkYearRange = (year: number, selectedYear: string): boolean => {
    const [start, end] = selectedYear.split("-").map(Number);
    return year >= start && year <= end;
  };
  const selectedGenre = useSelector((store: any) => store.filter.ganre);
  const selectedRating = useSelector((store: any) => store.filter.rating);
  const selectedYear = useSelector((store: any) => store.filter.year);

  const filteredData = data.filter((obj) => {
    const filterCondition = obj.type === filter;
    const genreCondition =
      !selectedGenre || obj.ganre.some((ganre) => ganre === selectedGenre);
    const ratingCondition = !selectedRating || obj.rating >= selectedRating;
    const yearCondition =
      !selectedYear || checkYearRange(obj.year, selectedYear);

    return (
      filterCondition && genreCondition && ratingCondition && yearCondition
    );
  });
  console.log(filteredData);

  return (
    <div className={styles.items}>
      {filteredData.length > 0 ? (
        filteredData.map((obj) => (
          <Link href={`/${obj.link}/${obj.id}`} key={obj.id}>
            <MovieItem
              img={obj.url}
              key={obj.id}
              year={obj.year}
              time={obj.time}
              title={obj.title}
              rating={obj.rating}
            />
          </Link>
        ))
      ) : (
        <h2 className={styles.h2}>Нету фильмов подходящих под сортировку</h2>
      )}
    </div>
  );
};

export default Items;
