import Image from "next/image";
import React from "react";
import styles from "./actors.module.scss";
import { data } from "@/api/data";
import Link from "next/link";

type Props = {
  title?: string;
};
const ActorsMovie: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.actorsMovie}>
      <h3>Актёры</h3>
      {data
        .filter((obj) => {
          if (obj.title === title) return true;
        })
        .map((obj, i) => (
          <div key={i} className={styles.actor}>
            {obj.actors.map((obj) => (
              <div key={obj.id} className={styles.actorInfo}>
                <Link href={`/actor/${obj.id}`}>
                  <Image
                    key={obj.id}
                    className={styles.image}
                    src={obj.image}
                    alt={obj.name}
                    width={130}
                    height={130}
                  ></Image>
                  <p className={styles.nameActor}>{obj.name}</p>
                  <h5>Актёр</h5>
                </Link>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ActorsMovie;
