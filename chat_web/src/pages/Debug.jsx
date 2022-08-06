import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, List, ListItem } from "@mui/material";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChatBox from "../components/ChatBox";
import ChatBubble from "../components/ChatBubble";
import ChatWindow from "../components/ChatWindow";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Timestamp } from "firebase/firestore";

const chatHistoryRef = collection(db, "chat_history");

const handleEnter = (event) => {
  if (event.key == "Enter" && event.shiftKey) {
    console.log("Detected Shift+Enter key");
  } else if (event.key == "Enter") {
    console.log("Detected Enter key");
    event.preventDefault();
  }
};

export default function ChatScreen() {
  const [currentText, setCurrentText] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(null);

  useEffect(() => {
    //Set up observer on user authentication:
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("User is signed in!");
        console.log(user);
        setLoggedIn(true);
      } else {
        // User is signed out
        console.log("Not signed in!");
        setLoggedIn(false);
      }
    });
    /*
    //Firestore test:
    const createNewDoc = async () => {
      setDoc(doc(db, "chat_history", "4"), {
        name: "Tester",
        message: "This is a test messaged added to firestore via code!",
        timestamp: Timestamp.now(),
      });
      console.log("Just finished setDoc function");
    };

    createNewDoc().catch(() => {
      console.log("Firestore operation failed!");
    });*/
  }, []);

  const handleChatBoxChange = (event) => {
    setCurrentText(event.target.value);
  };

  return loggedIn ? <ChatWindow></ChatWindow> : null;
}
