import React from "react";
import styles from "./addCardButton.module.scss";

const AddCardButton = ({ data }) => {
  // Click sul bottone
  // aggiunge un oggetto a data

  const newCard = {
    slug: "5",
    title: "Exercise 5",
    objective: "Array of objects",
    score: 50,
    status: "To do",
    completionDate: 1671034811,
  };

  const addCard = () => {
    data.push(newCard);
    console.log("Click", data);
  };

  return (
    <>
      <button className={styles.button} onClick={addCard}>
        add
      </button>
    </>
  );
};

export default AddCardButton;
