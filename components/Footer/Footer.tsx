import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.p}>Добро пожаловать на MovieMania</p>
        <p className={styles.p1}>
          Мы предлагаем широкий выбор кинокартин различных жанров и направлений
          - от классики до новинок, от драм до боевиков. На MovieMania вы
          сможете насладиться просмотром любимых фильмов в высоком качестве в
          любое время и в любом месте!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
