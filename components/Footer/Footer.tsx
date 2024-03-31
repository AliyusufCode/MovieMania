import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
