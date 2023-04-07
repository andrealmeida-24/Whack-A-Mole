import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { incrementScore } from "../../../store/gameplaySlice";
import holeImg from "../../../assets/WAM_Hole.png";
import moleImg from "../../../assets/WAM_Mole.png";
import React from "react";

interface Props {
  id: number;
}

export default function Mole({ id }: Props) {
  const dispatch = useDispatch();
  const activeID = useSelector<RootState>((state) => state.gameplay.activeID);

  const handleClick = (e: React.MouseEvent) => {
    if (activeID === id) {
      dispatch(incrementScore());
    }
    if (activeID !== id) {
    }
  };
  return (
    <div onClick={(e) => handleClick(e)}>
      <img
        src={activeID === id ? moleImg : holeImg}
        className={activeID === id ? moleImg : holeImg}
        alt="Hole"
      />
    </div>
  );
}
