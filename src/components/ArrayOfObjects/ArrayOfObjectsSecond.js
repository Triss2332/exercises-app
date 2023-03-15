import React, { useState } from "react";

const ArrayOfObjectsSecond = () => {
  const arr = [
    {
      name: "Katniss",
      age: 4,
      breed: "Border Collie",
    },
    {
      name: "Kenai",
      age: 8,
      breed: "Jack Russell",
    },
    {
      name: "Lizzie",
      age: 13,
      breed: "Meticcio",
    },
  ];

  const dogNames = (prop, array) => {
    const propArray = array.map((a) => a.breed);
    const propFalse = propArray.filter((e) => e != prop);

    return propFalse.length;
  };

  var result = dogNames("Meticcio", arr);

  return (
    <>
      <h1>{result}</h1>
    </>
  );
};

export default ArrayOfObjectsSecond;
