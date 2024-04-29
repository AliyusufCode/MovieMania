"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./slider.module.scss";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import app from "../../api/api.json";
type Slider = {
  url: string;
  title: string;
  id: number;
};

const CarouselComponent = ({ sliders }: { sliders: Slider[] }) => {
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

  return (
    <div className={styles.carouselContainer} style={{ position: "relative" }}>
      <button className={styles.swiperButtonNext} onClick={goNext}>
        <MdOutlineNavigateNext className={styles.icon} />
      </button>
      <button className={styles.swiperButtonPrev} onClick={goPrev}>
        <GrFormPrevious className={styles.icon} />
      </button>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1.77}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          360: {
            slidesPerView: 1.1,
            spaceBetween: 3,
            centeredSlides: false,
          },
          400: {
            slidesPerView: 1.14,
            centeredSlides: false,
            spaceBetween: 1,
          },
          465: {
            slidesPerView: 1.1,
            spaceBetween: 3,
          },
          500: {
            slidesPerView: 1.3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 1.77,
            centeredSlides: true,
            spaceBetween: 10,
          },
        }}
      >
        {sliders.map((slider: any, index: number) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Link href={`/${slider.link}/${slider.id}`}>
              <Image
                className={styles.cart}
                src={slider.url}
                alt={slider.title}
                width={850}
                height={480}
              />
            </Link>
            <div className={styles.infoCart}>
              <div className={styles.textOverlay}>
                <h3>{slider.title}</h3>
              </div>
              <div className={styles.textOverlayBottom}>
                <p className={styles.rating}>{slider.rating}</p>
                <p>{slider.year}</p> <h4>{slider.ganre[0]}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.carouselButtons}></div>
    </div>
  );
};

export default CarouselComponent;
