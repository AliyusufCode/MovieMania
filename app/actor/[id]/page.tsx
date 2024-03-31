"use client";
import React from "react";
import { data } from "@/api/data";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import MovieItem from "@/components/RecommendMovie/MovieItem";

const Page = ({ params }: any) => {
  const actor = data
    .flatMap((obj) => obj.actors)
    .find((actor) => actor.id === Number(params.id));
  const filters = data.filter((obj) =>
    obj.actors.some((actorMovie) => actorMovie.id === actor?.id)
  );
  return (
    <div className={styles.actor}>
      {actor ? (
        <div>
          {
            <div className={styles.contentActor}>
              <div>
                <Image
                  className={styles.img}
                  src={actor.image}
                  alt={actor.name}
                  width={150}
                  height={150}
                ></Image>
              </div>
              <div className={styles.info}>
                <h3>{actor.name}</h3>
                <div className={styles.infoActer}>
                  <h4>Карьера:</h4>
                  <p>Актер</p>
                </div>
              </div>
            </div>
          }
          <p className={styles.movieCount}> Фильмография ({filters.length})</p>
          <div className={styles.slider}>
            {filters.map((obj: any) => (
              <div key={obj.id} className={styles.slide}>
                <Link href={`/${obj.link}/${obj.id}`}>
                  <div className={styles.slide}>
                    <MovieItem
                      img={obj.url}
                      key={obj.id}
                      year={obj.year}
                      time={obj.time}
                      title={obj.title}
                      rating={obj.rating}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "Актер не найден"
      )}
    </div>
  );
};

export default Page;
