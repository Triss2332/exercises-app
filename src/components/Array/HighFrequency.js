import React, { useState } from "react";

const HighFrequency = () => {
  let string = "supercalifragilistichespiralidoso";
  const [showResult, setShowResult] = useState(false);

  const result = (str) => {
    let frequencyCounter = {};

    for (let char of string) {
      frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
    }

    let maxCount = 0;
    let maxCharacter = null;

    for (let key in frequencyCounter) {
      if (frequencyCounter[key] > maxCount) {
        maxCount = frequencyCounter[key];
        maxCharacter = key;
      }
    }

    return maxCharacter;
  };
  const maxChar = result(string);

  const resultsDef = () => {
    setShowResult(!showResult);
  };

  return (
    <>
      <h1>{string}</h1>
      <button onClick={resultsDef}>Click to see the highest frequency</button>
      {showResult ? <h1>{maxChar}</h1> : null}
    </>
  );
};

export default HighFrequency;
