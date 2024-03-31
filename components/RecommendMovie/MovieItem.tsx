"use client";
import React, { useRef, useState } from "react";
import styles from "./MovieItem.module.scss";
import Image from "next/image";

export type MovieProps = {
  img: string;

  year: number;
  title: string;
  rating: number;
  time: string;
};
const MovieItem: React.FC<MovieProps> = ({
  img,
  title,

  rating,
  year,
  time,
}) => {
  const [pointed, setPointed] = useState(false);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      setPointed(true);
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      setPointed(false);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.cart}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.img}
        >
          <Image
            ref={imageRef}
            src={img}
            alt={title}
            width={230}
            height={340}
          />
          {pointed && (
            <div className={styles.info}>
              <p className={styles.title}> {title}</p>
              <p className={styles.rating}> {rating} </p>
              <p className={styles.year}> {year} </p>
              <p className={styles.time}>{time} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieItem;
