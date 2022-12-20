import React, { useState, useMemo } from "react";
import Card from "../src/components/common/Card";
import Columns from "../src/components/common/Column";
import Text from "../src/components/common/Text";
import data from "../src/exercises-list.json";

const Dashboard = () => {
  const colStatus = ["To do", "In progress", "In review", "Done"];

  const [selected, setSelected] = useState();
  const [jsonData, setJsonData] = useState(data);

  const handleChange = (event, title) => {
    const cardIndex = jsonData.findIndex((item) => item.title === title);
    console.log("CARD INDEX", cardIndex);
    const card = jsonData.filter((item) => item.title === title)[0];
    const updateCard = { ...card, status: event.target.value };

    const json = jsonData.filter((item) => item.title !== title);

    json.splice(cardIndex, 0, updateCard);

    setJsonData(json);
  };

  return (
    <>
      <div>
        <Text userName={"Beatrice"} />
        <div className="columnContainer">
          {/* MAP SULLO STATUS PER CREARE LE COLONNE  */}
          {colStatus.map((singleColStatus) => {
            return (
              <Columns
                colName={singleColStatus}
                data={jsonData}
                key={singleColStatus}
              >
                {/* MAP SULL'ARRAY PER CREARE LE CARD IN BASE A QUANTI OGGETTI CI SONO IN CORRISPONDENZA ALLO STATUS  */}
                {jsonData?.map((item) => {
                  if (item.status === singleColStatus) {
                    return (
                      <Card
                        key={item.title}
                        title={item.title}
                        objective={item.objective}
                        value={item.status}
                        staticStatus={colStatus}
                        handleChange={(e) => handleChange(e, item.title)}
                        data={jsonData}
                      />
                    );
                  }
                })}
              </Columns>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
