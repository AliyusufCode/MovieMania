"use client";
import Link from "next/link";
import MovieCategory, { list } from "../MovieCategory/MovieCategory";
import styles from "./header.module.scss";
import { BiCameraMovie } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.content}>
      <div className={styles.leftHeader}>
        <Link href={"/"}>
          <BiCameraMovie className={styles.logo} />
        </Link>
        <MovieCategory />
      </div>
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
                    <p className={pathname === el.url ? styles.activeItem : ""}>
                      {el.title}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
