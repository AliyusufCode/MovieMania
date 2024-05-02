"use client";
import Link from "next/link";
import MovieCategory, { list } from "../MovieCategory/MovieCategory";
import styles from "./header.module.scss";
import { BiCameraMovie } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { data } from "@/api/data";
import SearchItem from "../Search/SearchItem";
import Input from "../Input/Input";
import Auth from "../Auth/Auth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const pathname = usePathname();

  const filteredData = data.filter((el: any) => {
    if (
      inputValue &&
      el.title.toLowerCase().includes(inputValue.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className={styles.content}>
      <div className={styles.leftHeader}>
        <Link href={"/"}>
          <div className={styles.logoHeader}>
            <BiCameraMovie className={styles.logo} />
            <p>Movie Mania</p>
          </div>
        </Link>
        <MovieCategory />
      </div>

      <div className={styles.rightHeader}>
        <div onClick={() => setOpenSearch(!openSearch)}>
          <IoSearchSharp className={styles.iconSearch} />
        </div>
        <Auth />
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          {!open && <GiHamburgerMenu />}
        </div>
        {open && (
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div className={styles.category}>
              <MdClose onClick={() => setOpen(true)} className={styles.icon} />
              <ul className={styles.list}>
                {list.map((el) => (
                  <Link key={el.title} href={el.url}>
                    <li className={styles.item}>
                      <p
                        className={pathname === el.url ? styles.activeItem : ""}
                      >
                        {el.title}
                      </p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div>
          {openSearch && (
            <div className={styles.container}>
              <IoClose
                className={styles.iconClose}
                onClick={() => setOpenSearch(!openSearch)}
              />
              <Input setInputValue={setInputValue} inputValue={inputValue} />
              <div className={styles.contentMovie}>
                {filteredData.map((el: any) => (
                  <Link
                    key={el.id}
                    href={`/${el.link}/${el.id}`}
                    onClick={() => setOpenSearch(!openSearch)}
                  >
                    <SearchItem
                      title={el.title}
                      year={el.year}
                      img={el.url}
                      rating={el.rating}
                    />
                  </Link>
                ))}
                {inputValue && filteredData.length < 1 && (
                  <div className={styles.noResults}>
                    <h2> Ничего не нашлось</h2>
                    <p>Может быть, вы ищете то, чего пока нет в каталоге</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
