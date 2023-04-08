import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { gameOn, getRandomID, reset } from "../../store/gameplaySlice";
import "./gameBoard.styles.scss";

import GenericBigButton from "../buttons/genericBigButton";
import GenericMedButton from "../buttons/genericMedButton";
import MoleContainer from "../MoleContainer/moleContainer";
import { useEffect, useState } from "react";

export default function GameBoard() {
  const [count, setCount] = useState(30);
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();
  const isGameOn = useSelector<RootState>((state) => state.gameplay.gameOn);
  const score = useSelector<RootState>((state) => state.gameplay.score);

  useEffect(() => {
    if (count > 0 && start === true && isGameOn) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      setCount(30);
      dispatch(reset());
      setStart(false);
    }
  }, [count, start]);

  useEffect(() => {
    if (start === true) {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 12 + 1);
        dispatch(getRandomID(randomNum));
      }, 500);
    } else {
      dispatch(getRandomID(0));
    }
  });

  const handleStart = () => {
    dispatch(gameOn());
    setStart(!start);
  };

  return (
    <div className="gameBoard">
      {/* <img></img>*/}
      <h1>{`Time: ${count}`}</h1>
      <h1>{`Score: ${score}`}</h1>
      <div onClick={() => handleStart()}>
        <GenericBigButton text={"Start"} />
      </div>
      <div className="gameBoard_auth-container">
        <GenericMedButton text="SignIn" onClick={() => null} />
      </div>
      <GenericMedButton text="Leaderboard" onClick={() => null} />
      <MoleContainer />
    </div>
  );
}
