import React from "react";
import "./genericMedButton.styles.scss";

interface Props {
  text: string;
  onClick: () => null;
}

export default function GenericMedButton({ text, onClick }: Props) {
  return (
    <button className="buttons_genericMed" onClick={onClick}>
      {text}
    </button>
  );
}
