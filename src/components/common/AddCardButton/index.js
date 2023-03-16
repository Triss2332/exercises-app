import React from "react";
import styles from "./addCardButton.module.scss";

const AddCardButton = ({ exerciseList }) => {
  // Click sul bottone
  // aggiunge un oggetto a exerciseList

  //exerciseList non contiene i dati aggiornati, perché non lo aggiorna finché non cambio stato a una card esistente?

  const newCard = {
    slug: "5",
    title: "Exercise 5",
    objective: "Array of objects",
    score: 50,
    status: "To do",
    completionDate: 1671034811,
  };

  const addCard = () => {
    exerciseList.push(newCard);
    console.log("Click", exerciseList);
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
