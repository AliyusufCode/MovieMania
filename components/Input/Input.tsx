import React from "react";
import styles from "./input.module.scss";
import { IoClose } from "react-icons/io5";

type Props = {
  inputValue: string;
  setInputValue: any;
};
const Input: React.FC<Props> = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div className={styles.contentInput}>
        <h1>Поиск</h1>
        <div className={styles.input}>
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={handleInputChange}
          />
          <label
            htmlFor="searchInput"
            className={inputValue ? styles.activeLabel : ""}
          >
            Фильмы, сериалы, мультфильмы
          </label>
          {inputValue && (
            <IoClose
              className={styles.clearInput}
              onClick={() => setInputValue("")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
