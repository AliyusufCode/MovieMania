import React from "react";
import styles from "./buttons.module.scss";
import { MdBookmarkBorder } from "react-icons/md";
const Buttons = () => {
  return (
    <div className={styles.content}>
      <button className={styles.openMovie}>Смотреть фильм</button>
      <button className={styles.openTrailer}>Трейлер</button>
      <button className={styles.favorite}>
        <MdBookmarkBorder className={styles.img} />
      </button>
    </div>
  );
};

export default Buttons;
