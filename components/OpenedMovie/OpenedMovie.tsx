"use client";
import React, { useState } from "react";
import styles from "./OpenedMovie.module.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Buttons from "../ButtonsMovie/Buttons";
import ReactPlayer from "react-player/lazy";
import Similar from "../Similar/Similar";
import ActorsMovie from "../ActorsMovie/ActorsMovie";
import Link from "next/link";

export type OpenedMovieProps = {
  img: string;
  ganre: any;
  image: string;
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
  id?: number;
  link?: string;
  playerUrl: string;
};
const OpenedMovie: React.FC<OpenedMovieProps> = ({
  image,
  img,
  title,
  type,
  ganre,
  rating,
  year,
  time,
  body,
  country,
  link,
  director,
  actors,
  description,
  playerUrl,
  id,
}) => {
  const [player, setPlayer] = useState(false);
  const topActors = actors.slice(0, 3);
  const [isDescriptionClick, setIsDescriptionClick] = useState(false);
  const infoFavorites = {
    id,
    title,
    ganre,
    rating,
    year,
    time,
    body,
    link,
    image,
    country,
    director,
    actors,
    description,
  };
  return (
    <>
      {player ? (
        <div className={styles.player}>
          <div className={styles.playerClose}>
            <IoMdCloseCircleOutline onClick={() => setPlayer(!player)} />
          </div>
          <ReactPlayer
            url={`https://www.youtube.com/${playerUrl}`}
            light={false}
            width="340px"
            height={"260px"}
            playing={true}
            controls={true}
            pip={true}
          />
        </div>
      ) : (
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
              <Buttons
                infoFavorites={infoFavorites}
                setPlayer={setPlayer}
                movieId={id}
              />
            </div>
          </div>
          <div className={styles.contentDescription}>
            <h3>Описание</h3>
            <p>
              {isDescriptionClick
                ? description
                : `${description.slice(0, 100)}...`}
              <span
                onClick={() => setIsDescriptionClick(!isDescriptionClick)}
                className={styles.span}
              >
                {isDescriptionClick ? "Скрыть описание" : "Подробное описание"}
              </span>
            </p>
          </div>
          <Similar title={title} ganre={ganre} type={type} />
          <ActorsMovie title={title} />
        </div>
      )}
    </>
  );
};

export default OpenedMovie;
