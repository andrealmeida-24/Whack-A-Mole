import React from "react";
import "./genericBigButton.styles.scss";

interface Props {
  text: string;
}

export default function GenericBigButton({ text }: Props) {
  return <button className="buttons_genericBig">{text}</button>;
}
