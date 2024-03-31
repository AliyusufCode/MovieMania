"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Recommend.module.scss";
import MovieItem from "./MovieItem";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { data } from "../../../app/api/data";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSelectedGenre } from "@/store/Slices/sortSlice";
type Props = {
  title: string;
  sortGanre?: string;
  sortYear?: number;
};

const RecommendMovie: React.FC<Props> = ({ title, sortGanre }) => {
  const swiperRef = React.useRef(null);
  const goNext = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slidePrev();
    }
  };
  console.log(title);
  const dispatch = useDispatch();

  const handleGenreSelection = (genre: string) => {
    dispatch(setSelectedGenre(genre));
  };

  const checkGenre = (obj: any, sortGanre: any) => {
    const genres = obj.ganre.map((genre: any) => genre?.toLocaleLowerCase());
    return genres.includes(sortGanre?.toLocaleLowerCase()) || !sortGanre;
  };
  return (
    <div className={styles.content}>
      <div
        className={styles.title}
        onClick={() => handleGenreSelection(sortGanre ?? "")}
      >
        <Link href={`/films`}>
          <h2>{title}</h2>
        </Link>
        <MdOutlineNavigateNext className={styles.icon} />
      </div>
      <div className={styles.movies}>
        <button className={styles.swiperButtonNext} onClick={goNext}>
          <MdOutlineNavigateNext className={styles.icon} />
        </button>
        <button className={styles.swiperButtonPrev} onClick={goPrev}>
          <GrFormPrevious className={styles.icon} />
        </button>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={6}
          loop={false}
        >
          {data
            .filter((obj) => checkGenre(obj, sortGanre))
            .map((obj) => (
              <SwiperSlide key={obj.id} className={styles.slide}>
                <Link href={`/${obj.link}/${obj.id}`}>
                  <MovieItem
                    img={obj.url}
                    key={obj.id}
                    year={obj.year}
                    time={obj.time}
                    title={obj.title}
                    rating={obj.rating}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendMovie;
