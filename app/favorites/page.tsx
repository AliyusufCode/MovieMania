"use client";
import React from "react";
import styles from "./favorites.module.scss";
import { useSelector } from "react-redux";
import MovieItem from "@/components/RecommendMovie/MovieItem";

import { OpenedMovieProps } from "@/components/OpenedMovie/OpenedMovie";
import Link from "next/link";

const Favorites: React.FC = () => {
  const favorites = useSelector((state: any) => state.favorites.movies);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Избранное</h1>
      <div className={styles.content}>
        {favorites.length > 0 ? (
          favorites.map((obj: OpenedMovieProps) => (
            <Link href={`/${obj.link}/${obj.id}`} key={obj.id}>
              <div className={styles.contentItem}>
                <MovieItem
                  key={obj.id}
                  title={obj.title}
                  rating={obj.rating}
                  year={obj.year}
                  img={obj.image}
                  time={obj.time}
                />
              </div>
            </Link>
          ))
        ) : (
          <div>
            <h3 className={styles.h3}>Здесь пока ничего нет </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
