import React, { useState, useEffect, useCallback } from "react";
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
  }, []);

  const handleChatBoxChange = (event) => {
    console.log("In handleChatBoxChange!");
    setCurrentText(event.target.value);
  };

  const handleSend = useCallback(async () => {
    if (currentText == "") {
      return;
    }
    setCurrentText("");
    setDoc(doc(db, "chat_history", "5"), {
      name: "Tester",
      message: currentText,
      timestamp: Timestamp.now(),
    });
    console.log("Just finished setDoc function");
  });

  return loggedIn ? (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="flex-end"
      p={2}
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      <ChatWindow />
      <ChatBox
        currentText={currentText}
        handleChatBoxChange={handleChatBoxChange}
        handleEnter={handleEnter}
        handleSend={handleSend}
      />
    </Grid>
  ) : loggedIn == null ? (
    <Grid
      container
      spacing={0}
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    ></Grid>
  ) : (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      <Typography
        id="title"
        variant="h3"
        sx={{
          padding: 3,
          fontWeight: "bold",
        }}
      >
        Nice Try
      </Typography>
    </Grid>
  );
}
