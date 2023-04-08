import React from "react";
import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GameBoard from "./components/GameBoard/gameBoard";
import LayoutWrapper from "./components/LayoutWrapper/layoutWrapper";
import Loader from "./components/loader/loader";
import "./App.scss";
import Login from "./components/login/login";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <LayoutWrapper>
        <Loader />
      </LayoutWrapper>
    );
  }

  if (error) {
    <LayoutWrapper>
      <p>{`Error: ${error}`}</p>
    </LayoutWrapper>;
  }

  return (
    <div className="App">
      <LayoutWrapper>{user ? <GameBoard /> : <Login />}</LayoutWrapper>
    </div>
  );
}

export default App;
