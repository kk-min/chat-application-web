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
  apiKey: "AIzaSyA_0nZ35w557i9bmaoi4iOMwmRfL62B5CU",

  authDomain: "min-simple-chat-app.firebaseapp.com",

  projectId: "min-simple-chat-app",

  storageBucket: "min-simple-chat-app.appspot.com",

  messagingSenderId: "350602646172",

  appId: "1:350602646172:web:575ffa905cefb124565359",
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
