import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "./modalGameIsOver.styles.scss";
import "./modalLeaderboard.styles.scss";
import GenericMedButton from "../buttons/genericMedButton";

interface Props {
  setIsGameFinished: any;
}

export default function ModalGameIsFinished({ setIsGameFinished }: Props) {
  const lastScore = useSelector<RootState>((state) => state.gameplay.lastScore);

  const handleCloseModal = () => {
    setIsGameFinished(false);
  };
  return (
    <div className="modal-container">
      <div className="modal-content gameIsOver-text">
        <button className="modal-closeButton" onClick={handleCloseModal}>
          X
        </button>
        <h1 className="gameIsOver-h1">Time is Over !</h1>
        <div className="gameIsOver-score">
          <h1>Your score : </h1>
          <h1
            className={`gameIsOver_Score ${
              Number(lastScore) > 12 ? "goodScore" : ""
            }`}
          >{`${lastScore}`}</h1>
          <div onClick={handleCloseModal}>
            <GenericMedButton text="Try Again" />
          </div>
        </div>
      </div>
    </div>
  );
}
