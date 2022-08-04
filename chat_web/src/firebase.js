import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export { db };
