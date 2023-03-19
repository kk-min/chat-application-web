import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

// Firebase configuration:
const firebaseConfig = {
  apiKey: "",

  authDomain: "",

  projectId: "",

  storageBucket: ".appspot.com",

  messagingSenderId: "",

  appId: "1::web:575ffa905cefb124565359",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {})
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export { db, auth };
