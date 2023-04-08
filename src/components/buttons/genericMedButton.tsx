import React from "react";
import "./genericMedButton.styles.scss";

interface Props {
  text: string;
}

export default function GenericMedButton({ text }: Props) {
  return <button className="buttons_genericMed">{text}</button>;
}
