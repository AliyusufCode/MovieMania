import Link from "next/link";
import MovieCategory from "../MovieCategory/MovieCategory";
import styles from "./header.module.scss";
import { BiCameraMovie } from "react-icons/bi";

export default function Header() {
  return (
    <div className={styles.content}>
      <div className={styles.leftHeader}>
        <Link href={" /"}>
          <BiCameraMovie className={styles.logo} />
        </Link>
        <MovieCategory />
      </div>
    </div>
  );
}
