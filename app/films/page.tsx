import React from "react";
import styles from "./page.module.scss";

import Sort from "@/components/Sort/Sort";
import Items from "@/components/Sort/Items";

const Page = () => {
  return (
    <div className={styles.content}>
      <h2>Фильмы</h2>
      <Sort />
      <Items filter="films" />
    </div>
  );
};

export default Page;
