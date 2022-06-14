import React from "react";
import Card from "./card";

const Cardlist = ({ robot }) => {
  return (
    <div>
      {robot.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
