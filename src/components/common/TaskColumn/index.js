import React from "react";
import ExerciseCard from "../ExerciseCard";
import styles from "./taskColumn.module.scss";

const TaskColumn = ({ exerciseList, taskStatus, handleChange }) => {
  const tasksToDisplay = exerciseList.filter(
    (item) => item.status === taskStatus
  );
  return (
    <>
      <div className={styles.externalContainer}>
        <div className={styles.column}>
          <div className={styles.innerContainer}>
            <div className={styles.text}>{taskStatus}</div>
            <div className={styles.badge}>{tasksToDisplay.length}</div>
          </div>
          {/* MAP SULL'ARRAY PER CREARE LE CARD IN BASE A QUANTI OGGETTI CI SONO IN CORRISPONDENZA ALLO STATUS  */}
          {tasksToDisplay?.map((item) => {
            return (
              // title, objective, handleChange, currentStatus
              <ExerciseCard
                key={item.title}
                title={item.title}
                objective={item.objective}
                currentStatus={item.status}
                handleChange={(e) => handleChange(e, item.title)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskColumn;
