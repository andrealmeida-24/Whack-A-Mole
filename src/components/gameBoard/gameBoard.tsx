import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./gameBoard.styles.scss";

import GenericBigButton from "../buttons/genericBigButton";
import GenericMedButton from "../buttons/genericMedButton";
import MoleContainer from "../MoleContainer/moleContainer";

export default function GameBoard() {
  const time = useSelector<RootState>((state) => state.gameplay.time);
  const score = useSelector<RootState>((state) => state.gameplay.score);
  return (
    <div className="gameBoard">
      {/* <img></img>*/}
      <h1>{`Time: ${time}`}</h1>
      <h1>{`Score: ${score}`}</h1>
      <GenericBigButton text={"Start"} onClick={() => null} />
      <div className="gameBoard_auth-container">
        <GenericMedButton text="SignIn" onClick={() => null} />
      </div>
      <GenericMedButton text="Leaderboard" onClick={() => null} />
      <MoleContainer />
    </div>
  );
}
