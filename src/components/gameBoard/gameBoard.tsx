import React from "react";
import "./gameBoard.styles.scss";

import GenericBigButton from "../buttons/genericBigButton";
import GenericMedButton from "../buttons/genericMedButton";

export default function GameBoard() {
  return (
    <div className="gameBoard">
      {/* <img></img>*/}
      <h1>Time: 00</h1>
      <h1>Score: 00</h1>
      <GenericBigButton text={"Start"} onClick={() => null} />
      <div className="gameBoard_auth-container">
        <GenericMedButton text="SignIn" onClick={() => null} />
      </div>
      <GenericMedButton text="Leaderboard" onClick={() => null} />
      <div className="gameBoard-container">{/* <img></img>*/}</div>
    </div>
  );
}
