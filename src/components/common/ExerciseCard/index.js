import React from "react";
import { availableStates } from "../../../data";
import styles from "./card.module.scss";

const ExerciseCard = ({ title, objective, handleChange, currentStatus }) => {
  return (
    <>
      <div className={styles.externalContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{objective}</div>
          {/* STATUS CHANGER */}
          {/* currentStatus - statusList - handleChange */}
          <select
            className={styles.select}
            value={currentStatus}
            onChange={handleChange}
          >
            {availableStates.map((item) => {
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

export default ExerciseCard;
