import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  gameOn,
  getRandomID,
  reset,
  controlModal,
  setLastScore,
} from "../../store/gameplaySlice";
import "./gameBoard.styles.scss";

import GenericBigButton from "../buttons/genericBigButton";
import GenericMedButton from "../buttons/genericMedButton";
import MoleContainer from "../MoleContainer/moleContainer";
import { useEffect, useState } from "react";
import { auth, db } from "../../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { signOut } from "firebase/auth";
import ModalLeaderboard from "../modal/modalLeaderboard";
import ModalGameIsFinished from "../modal/modalGameIsFinished";

export default function GameBoard() {
  const [count, setCount] = useState(30);
  const [start, setStart] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const dispatch = useDispatch();
  const isGameOn = useSelector<RootState>((state) => state.gameplay.gameOn);
  const score = useSelector<RootState>((state) => state.gameplay.score);
  const showModal = useSelector<RootState>((state) => state.gameplay.showModal);
  const lastScore = useSelector<RootState>((state) => state.gameplay.lastScore);

  const handleStart = () => {
    dispatch(gameOn());
    setStart(!start);
  };

  const handleOpenModal = () => {
    dispatch(controlModal(true));
  };

  const submit = async () => {
    try {
      await addDoc(collection(db, "Leaderboard"), {
        score,
        timestamp: serverTimestamp(),
        user: auth.currentUser?.displayName,
        email: auth.currentUser?.email,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const signOutUser = async () => {
    await signOut(auth)
      .then((r) => {})
      .catch((e) => {});
  };

  useEffect(() => {
    if (count > 0 && start === true && isGameOn) {
      setIsGameFinished(false);
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else if (count === 0) {
      setCount(30);
      dispatch(setLastScore(score));
      dispatch(reset());
      setStart(false);
      setIsGameFinished(true);
    }
  }, [count, start]);

  useEffect(() => {
    if (start === true) {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 12 + 1);
        dispatch(getRandomID(randomNum));
      }, 800);
    } else {
      dispatch(getRandomID(0));
    }
  });

  useEffect(() => {
    if (isGameFinished) {
      submit();
    }
  });

  return (
    <div className="gameBoard">
      <>{showModal && <ModalLeaderboard />}</>
      <>
        {isGameFinished && (
          <ModalGameIsFinished setIsGameFinished={setIsGameFinished} />
        )}
      </>
      <h1 className="gameBoard_currentUser">{auth.currentUser?.displayName}</h1>
      <h1>
        Time:
        <span className={count < 6 ? "lastSecondsTime" : ""}> {count}</span>
      </h1>
      <h1>{`Score: ${score}`}</h1>
      <h1>{`Last Score: ${lastScore} `}</h1>
      <div onClick={() => handleStart()}>
        <GenericBigButton text={start === false ? "Start" : "Stop"} />
      </div>
      <div className="gameBoard_auth-container" onClick={signOutUser}>
        <GenericMedButton text="SignOut" />
      </div>
      <div onClick={handleOpenModal}>
        <GenericMedButton text="Leaderboard" />
      </div>
      <MoleContainer />
    </div>
  );
}
