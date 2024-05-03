"use client";
import React, { useEffect } from "react";
import styles from "./buttons.module.scss";
import { MdBookmarkBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  addToFavorites,
  removeFavorite,
} from "@/store/Slices/favoriteSlice";
type Props = {
  infoFavorites: any;
  movieId?: number;
};

const Buttons: React.FC<Props> = ({ infoFavorites, movieId }) => {
  const favorites = useSelector((state: any) => state.favorites.movies);
  const favoritesId = useSelector((state: any) => state.favorites.moviesId);
  const isFavorite = favoritesId.includes(movieId);
  const dispatch = useDispatch();

  const clickFavorited = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movieId));
    } else {
      dispatch(addToFavorites(infoFavorites));
      dispatch(addFavorite(movieId));
    }
  };
  // console.log(favorites);
  // console.log(favoritesId);
  // console.log(isFavorite);
  // console.log(movieId);

  return (
    <div className={styles.content}>
      <button className={styles.openMovie}>Смотреть фильм</button>
      <button className={styles.openTrailer}>Трейлер</button>
      <button
        className={isFavorite ? styles.activeFav : styles.favorite}
        onClick={clickFavorited}
      >
        <MdBookmarkBorder className={styles.img} />
      </button>
    </div>
  );
};

export default Buttons;
