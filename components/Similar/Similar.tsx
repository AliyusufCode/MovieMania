import React from "react";
import styles from "./similar.module.scss";
import MovieItem from "../RecommendMovie/MovieItem";
import Link from "next/link";
import { data } from "@/api/data";

type Props = {
  ganre: any;
  type: any;
  title: string;
};
const SimilarSlider: React.FC<Props> = ({ ganre, type, title }) => {
  const filter = data.filter((obj: any) => {
    const filterMovie =
      obj.ganre[0] === ganre[0] && obj.type === type && obj.title !== title;
    if (filterMovie) {
      return obj;
    } else return false;
  });
  return (
    <div>
      <div className={styles.similar}>
        <h3>
          {filter.length > 0
            ? "Похожее"
            : "Пока что нету похожих фильмов к этому сериалу:("}
        </h3>
        <div className={styles.slider}>
          {filter.map((obj: any) => (
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
    </div>
  );
};

export default SimilarSlider;
