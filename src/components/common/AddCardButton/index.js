import React, { useState } from "react";
import styles from "./addCardButton.module.scss";

const AddCardButton = ({ data }) => {
  const [uploadCard, setUpladCard] = useState({
    slug: "5",
    title: "Exercise 5",
    objective: "Array of objects",
    score: 50,
    status: "To do",
    completionDate: 1671034811,
  });

  const addCard = () => {
    data.push(uploadCard);
  };
  console.log(data, "DATA UPLOADED");

  return (
    <>
      <button className={styles.button} onClick={addCard}>
        add
      </button>
    </>
  );
};

export default AddCardButton;
