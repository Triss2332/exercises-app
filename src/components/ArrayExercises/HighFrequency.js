import React, { useState } from "react";

const HighFrequency = () => {
  const array = [2, 3, 8, 6, 4, 10, 7, 12, 25];
  const arrayFormatted = array.toString().replace(/,/g, " ");
  const [showResult, setShowResult] = useState(false);

  const result = Math.max(...array);

  const resultsDef = () => {
    setShowResult(!showResult);
  };

  return (
    <>
      <h1>{arrayFormatted}</h1>
      <button onClick={resultsDef}>Click to see the highest number</button>
      {showResult ? <h1>{result}</h1> : null}
    </>
  );
};

export default HighFrequency;
