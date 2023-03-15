import React, { useState } from "react";

const ArrayOfObjectsThird = () => {
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

  //prende un array di oggetti e la prop
  //deve tornare un nuovo array di oggetti con la proprietà e il relativo valore rimossi

  // const dogNames = (prop, array) => {
  const newArray = arr.filter(function (props) {
    delete props.age;
    return true;
  });
  console.log(newArray, "NEW ARRAY");

  //   return newArray;
  // };

  // var result = dogNames("Meticcio", arr);

  return (
    <>
      {/* <h1>{result}</h1> */}
      <h1>prova</h1>
    </>
  );
};

export default ArrayOfObjectsThird;
