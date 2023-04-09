import React from "react";
import { useDispatch } from "react-redux";
import { setLastScore, reset } from "../../store/gameplaySlice";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import moleImg from "../../assets/WAM_Mole.png";
import "./login.styles.scss";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((r) => {})
      .catch((e) => {});
    dispatch(setLastScore(0));
    dispatch(reset());
  };
  return (
    <div className="login-container">
      <div className="login-logo">
        <h1 className="login-logo-text">Whack-A</h1>
        <img src={moleImg} alt="mole" />
      </div>
      <button onClick={handleLogin}>Login with Google</button>
      <p>Please Login with your Google Account to start playing.</p>
    </div>
  );
}
