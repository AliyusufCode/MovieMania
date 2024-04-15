"use client";
import React, { useState } from "react";
import styles from "./OpenedMovie.module.scss";

import Buttons from "../ButtonsMovie/Buttons";

import Similar from "../Similar/Similar";
import ActorsMovie from "../ActorsMovie/ActorsMovie";
import Link from "next/link";

export type OpenedMovieProps = {
  img: string;
  ganre: any;
  year: number;
  title: string;
  rating: number;
  time: string;
  body: string;
  country: string;
  director: string;
  actors: any;
  description: string;
  type?: string;
};
const OpenedMovie: React.FC<OpenedMovieProps> = ({
  img,
  title,
  type,
  ganre,
  rating,
  year,
  time,
  body,
  country,
  director,
  actors,
  description,
}) => {
  const topActors = actors.slice(0, 3);

  const [isDescriptionClick, setIsDescriptionClick] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionClick(!isDescriptionClick);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={img} alt={title} className={styles.img} />
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.titleBottom}>
            <p className={styles.rating}> {rating}</p>
            <p className={styles.year}> {year}</p>
            <p className={styles.ganre}> {ganre[0]} </p>
            <p className={styles.country}> {country}</p>
            <p className={styles.time}>{time}</p>
          </div>
          <div className={styles.contentBottom}>
            <p className={styles.body}>{body}</p>
            <div className={styles.contentDirector}>
              <p className={styles.director}>Режиссёр: </p>
              <p className={styles.directorName}>{director}</p>
            </div>
            <div className={styles.contentActors}>
              <p className={styles.actors}>Актёры: </p>
              {topActors.map((actor: any, index: any) => (
                <React.Fragment key={actor.id}>
                  {index > 0 && ","}
                  <Link href={`/actor/${actor.id}`}>
                    <p className={styles.actorsNames}>{actor.name}</p>
                  </Link>
                </React.Fragment>
              ))}
            </div>
            <div className={styles.contentGanre}>
              <p className={styles.ganres}>Жанры: </p>
              <div className={styles.ganre}>
                {ganre.map((obj: any, i: any) => (
                  <p key={i}>{obj}</p>
                ))}
              </div>
            </div>
          </div>
          <Buttons />
        </div>
      </div>
      <div className={styles.contentDescription}>
        <h3>Описание</h3>
        <p>
          {isDescriptionClick ? description : `${description.slice(0, 100)}...`}
          <span onClick={toggleDescription} className={styles.span}>
            {isDescriptionClick ? "Скрыть описание" : "Подробное описание"}
          </span>
        </p>
      </div>
      <Similar title={title} ganre={ganre} type={type} />
      <ActorsMovie title={title} />
    </div>
  );
};

export default OpenedMovie;