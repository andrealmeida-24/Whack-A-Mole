import React from "react";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./login.styles.scss";

const handleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((r) => {})
    .catch((e) => {});
};

export default function Login() {
  return (
    <div className="login-container">
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
