import React, { useEffect, useState } from "react";
import styles from "./text.module.scss";

const Text = ({ userName }) => {
  const motivationalQuotes = [
    "“The individual who says it is not possible should move out of the way of those doing it.”   — Tricia Cunningham",
    "“Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.”   — Lou Holtz",
    "“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.”   — George Lorimer",
  ];

  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  const randomElement = motivationalQuotes[randomIndex];

  return (
    <>
      <div className={styles.externalContainer}>
        <div className={styles.upperText}>Welcome back, {userName}!</div>
        <div className={styles.underText}>{randomElement}</div>
      </div>
    </>
  );
};

export default Text;
