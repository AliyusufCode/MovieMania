"use client";
import React from "react";
import styles from "./category.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiCup } from "react-icons/tfi";
import { MdAccessTime } from "react-icons/md";
import { BsArrowThroughHeartFill } from "react-icons/bs";
import { PiKnifeBold } from "react-icons/pi";
import { GiStonePath } from "react-icons/gi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { PiSmileyBold } from "react-icons/pi";
import { FaGun } from "react-icons/fa6";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSelectedGenre, setSelectedYear } from "@/store/Slices/sortSlice";
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = () => {
  const dispatch = useDispatch();

  const handleGenreSelection = (genre: string, year?: string) => {
    dispatch(setSelectedGenre(genre));
    dispatch(setSelectedYear(year));
  };
  const swiperRef = React.useRef(null);

  const list = [
    { title: "Лучшие", category: "", link: "/films", icon: <TfiCup /> },
    {
      title: "Новые",
      category: "",
      year: "2020-2024",
      link: `/films`,
      icon: <MdAccessTime />,
    },
    {
      title: "Мелодраммы",
      category: "Мелодрамма",
      link: "/films",
      icon: <BsArrowThroughHeartFill />,
    },
    {
      title: "Ужасы",
      category: "Ужасы",
      link: "/films",
      icon: <PiKnifeBold />,
    },
    {
      title: "Приключения",
      category: "Приключения",
      link: "/films",
      icon: <GiStonePath />,
    },
    {
      title: "Фантастика",
      category: "Фантастика",
      link: "/films",
      icon: <MdOutlineRocketLaunch />,
    },
    {
      title: "Семейные",
      category: "Семейный",
      link: "/films",
      icon: <MdOutlineFamilyRestroom />,
    },
    {
      title: "Комедии",
      category: "Комедия",
      link: "/films",
      icon: <PiSmileyBold />,
    },
    { title: "Военные", category: "Военный", link: "/films", icon: <FaGun /> },
  ];

  return (
    <div className={styles.content}>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={7}
        centeredSlides={false}
        loop={true}
        breakpoints={{
          360: {
            slidesPerView: 2.4,
            spaceBetween: 8,
            centeredSlides: false,
          },
          500: {
            spaceBetween: 20,
            slidesPerView: 7,
          },
        }}
      >
        {list.map((obj) => (
          <SwiperSlide key={obj.title} className={styles.slide}>
            <div key={obj.title} className={styles.slide}>
              <Link href={obj.link}>
                <div
                  className={styles.slideInfo}
                  onClick={() => handleGenreSelection(obj.category, obj.year)}
                >
                  <span className={styles.icon}>{obj.icon}</span>
                  <p>{obj.title}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
