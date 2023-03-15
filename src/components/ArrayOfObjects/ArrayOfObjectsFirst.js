import React, { useState } from "react";

const ArrayOfObjectsFirst = () => {
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

  const arrayOfKeys = Object.keys(arr[0]);

  const dogNames = (prop, array) => {
    const names = array.map((a) => a.name);
    const namesFormatted = String(names);
    const propName = arrayOfKeys.find((e) => e == prop);
    return propName + ": " + namesFormatted;
  };

  var result = dogNames("name", arr);

  return (
    <>
      <h1>{result}</h1>
    </>
  );
};

export default ArrayOfObjectsFirst;
