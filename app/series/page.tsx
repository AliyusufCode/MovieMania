import React from "react";
import styles from "./page.module.scss";

import Sort from "@/components/Sort/Sort";
import Items from "@/components/Sort/Items";

const Page = () => {
  return (
    <div className={styles.content}>
      <h2>Сериалы</h2>
      <Sort />
      <Items filter="series" />
    </div>
  );
};

export default Page;
