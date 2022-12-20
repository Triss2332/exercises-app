import React, { Children } from "react";
import styles from "./column.module.scss";

const Columns = ({ data, colName, children }) => {
  const cardsLength = data.filter((item) => item.status === colName).length;
  return (
    <>
      <div className={styles.externalContainer}>
        <div className={styles.column}>
          <div className={styles.innerContainer}>
            <div className={styles.text}>{colName}</div>
            <div className={styles.badge}>{cardsLength}</div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Columns;
