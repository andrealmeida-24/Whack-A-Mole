import React from "react";
import "./modalItem.styles.scss";

interface Props {
  item: {
    user: string;
    score: number;
  };
  index: number;
}

export default function ModalItem({ item, index }: Props) {
  return (
    <div className="modalItem-container">
      <div>{`Pos: ${index + 1}`}</div>
      <div className="modalItem-center">{`Name: ${item.user}`}</div>
      <div>{`Score: ${item.score}`}</div>
    </div>
  );
}
