"use client";
import React from "react";
import Link from "next/link";
import styles from "./category.module.scss";
import { usePathname } from "next/navigation";
export const list = [
  { title: "Главная", url: "/" },
  { title: "Фильмы", url: "/films" },
  { title: "Сериалы", url: "/series" },
  { title: "Мультфильмы", url: "/cartoons" },
];
const MovieCategory = () => {
  const pathname = usePathname();

  return (
    <div className={styles.category}>
      <ul className={styles.list}>
        {list.map((el) => (
          <Link key={el.title} href={el.url}>
            <li className={styles.item}>
              <p className={pathname === el.url ? styles.itemActive : ""}>
                {el.title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieCategory;
