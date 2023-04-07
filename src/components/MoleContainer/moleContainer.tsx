import React from "react";
import "./moleContainer.styles.scss";
import Mole from "./Mole/mole";

const molesArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MoleContainer() {
  return (
    <div className="moleContainer">
      {molesArray.map((mole, index) => {
        return (
          <div key={index}>
            <Mole id={index} />
          </div>
        );
      })}
    </div>
  );
}
