import React, { useState } from "react";
import styles from "./addCardButton.module.scss";

const AddCardButton = ({ jsonData }) => {
  // Click sul bottone
  // aggiunge un oggetto a jsonData

  // const [uploadCard, setUpladCard] = useState({
  //   slug: "5",
  //   title: "Exercise 5",
  //   objective: "Array of objects",
  //   score: 50,
  //   status: "To do",
  //   completionDate: 1671034811,
  // });

  const addCard = () => {
    //   jsonData.push(uploadCard);
    console.log("Click");
  };

  console.log(jsonData, "json data");

  return (
    <>
      <button className={styles.button} onClick={addCard}>
        add
      </button>
    </>
  );
};

export default AddCardButton;
