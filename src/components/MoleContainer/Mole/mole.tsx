import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { incrementScore } from "../../../store/gameplaySlice";
import holeImg from "../../../assets/WAM_Hole.png";
import moleImg from "../../../assets/WAM_Mole.png";
import React from "react";
import "./mole.styles.scss";

interface Props {
  id: number;
}

export default function Mole({ id }: Props) {
  const dispatch = useDispatch();
  const activeID = useSelector<RootState>((state) => state.gameplay.activeID);
  const gameOn = useSelector<RootState>((state) => state.gameplay.gameOn);

  const handleClick = (e: React.MouseEvent) => {
    if (activeID === id && gameOn === true) {
      dispatch(incrementScore());
    }
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`mole ${activeID === id ? "" : "holeImg"}`}
    >
      <img
        src={activeID === id ? moleImg : holeImg}
        className={activeID === id ? moleImg : holeImg}
        alt="Mole"
      />
    </div>
  );
}
