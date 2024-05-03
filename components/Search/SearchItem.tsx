"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./searchItem.module.scss";
export type MovieProps = {
  img: string;
  year: number;
  title: string;
  rating: number;
};

const SearchItem: React.FC<MovieProps> = ({ img, title, rating, year }) => {
  const imageRef = useRef(null);

  return (
    <div className={styles.content}>
      <div className={styles.cart}>
        <div className={styles.img}>
          <Image
            ref={imageRef}
            src={img}
            alt={title}
            width={230}
            height={340}
          />
        </div>
        <div className={styles.title}>
          <h4>{title}</h4>
          <div className={styles.titleBottom}>
            <span>{year}</span>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
