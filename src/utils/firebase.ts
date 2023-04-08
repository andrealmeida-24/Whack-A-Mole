import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAuhjk_zsy1R9WnolX6Rkpa21MDf9x7Ig",
  authDomain: "whack-a-mole-39494.firebaseapp.com",
  projectId: "whack-a-mole-39494",
  storageBucket: "whack-a-mole-39494.appspot.com",
  messagingSenderId: "745090287050",
  appId: "1:745090287050:web:e7fc9e392616dc3abd3b33",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
