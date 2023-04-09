import React from "react";
import { MoonLoader } from "react-spinners";
import "./loader.styles.scss";

export default function Loader() {
  return (
    <div className="loader-container">
      <MoonLoader color="#c16902" speedMultiplier={0.7} className="loader" />
    </div>
  );
}
