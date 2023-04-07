import React from "react";
import "./genericBigButton.styles.scss";

interface Props {
  text: string;
  onClick: () => null;
}

export default function GenericBigButton({ text, onClick }: Props) {
  return (
    <button className="buttons_genericBig" onClick={onClick}>
      {text}
    </button>
  );
}
