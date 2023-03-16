import React, { useState } from "react";
// import ArrayOfObjectsFirst from "../src/components/ArrayOfObjects/ArrayOfObjectsFirst";
// import ArrayOfObjectsSecond from "../src/components/ArrayOfObjects/ArrayOfObjectsSecond";
// import ArrayOfObjectsThird from "../src/components/ArrayOfObjects/ArrayOfObjectsThird";
import AddCardButton from "../src/components/common/AddCardButton";
import TaskColumn from "../src/components/common/TaskColumn";
import Text from "../src/components/common/Text";
import { availableStates } from "../src/data";
import data from "../src/exercises-list.json";

const Dashboard = () => {
  const [jsonData, setJsonData] = useState(data);

  const handleChange = (event, title) => {
    const cardIndex = jsonData.findIndex((item) => item.title === title);
    const card = jsonData.filter((item) => item.title === title)[0];
    const updateCard = { ...card, status: event.target.value };

    const json = jsonData.filter((item) => item.title !== title);

    json.splice(cardIndex, 0, updateCard);

    setJsonData(json);
  };

  console.log(availableStates, "STATI DISPONIBILI");

  return (
    <>
      <div>
        {/* <ArrayOfObjectsFirst /> */}
        {/* <ArrayOfObjectsSecond /> */}
        {/* <ArrayOfObjectsThird /> */}
        <div className="container">
          <Text userName={"Beatrice"} />
          <AddCardButton data={jsonData} />
        </div>
        <div className="columnContainer">
          {/* MAP SULLO STATUS PER CREARE LE COLONNE  */}
          {/* exerciseList, taskStatus, handleChange */}
          {availableStates.map((taskStatus) => {
            return (
              <TaskColumn
                taskStatus={taskStatus}
                key={taskStatus}
                exerciseList={jsonData}
                handleChange={handleChange}
              ></TaskColumn>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
