import React, { useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { controlModal } from "../../store/gameplaySlice";
import "./modalLeaderboard.styles.scss";
import Loader from "../loader/loader";

const ModalItem = React.lazy(() => import("./modalItem"));

export default function ModalLeaderboard() {
  const [databaseScores, setDatabaseScores] = useState<any[]>([]);
  const dispatch = useDispatch();

  const getData = async () => {
    const scoresReference = collection(db, "Leaderboard");
    const q = query(scoresReference, orderBy("score", "desc"), limit(10));
    const queryData = await getDocs(q);
    const data: any[] = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
    setDatabaseScores(data);
  };

  const handleCloseModal = () => {
    dispatch(controlModal(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-closeButton" onClick={handleCloseModal}>
          X
        </button>
        <>
          <Suspense fallback={<Loader />}>
            {databaseScores?.map((item: any, index: number) => (
              <ModalItem item={item} index={index} key={index} />
            ))}
          </Suspense>
        </>
      </div>
    </div>
  );
}
