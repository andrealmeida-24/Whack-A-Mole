import React from "react";
import "./App.scss";
import GameBoard from "./components/gameBoard/gameBoard";
import LayoutWrapper from "./components/LayoutWrapper/layoutWrapper";

function App() {
  return (
    <div className="App">
      <LayoutWrapper>
        <GameBoard />
      </LayoutWrapper>
    </div>
  );
}

export default App;
