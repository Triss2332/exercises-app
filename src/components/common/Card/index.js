import React from "react";
import styles from "./card.module.scss";

const Card = ({ title, objective, staticStatus, handleChange, value }) => {
  return (
    <>
      <div className={styles.externalContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{objective}</div>
          <select
            className={styles.select}
            value={value}
            onChange={handleChange}
          >
            {staticStatus.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Card;
