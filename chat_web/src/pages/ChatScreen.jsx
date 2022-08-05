import React, { useState, useEffect } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChatBox from "../components/ChatBox";

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
  const [loggedIn, setLoggedIn] = React.useState(false);

  useEffect(() => {
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
    setCurrentText(event.target.value);
  };

  return loggedIn ? (
    <Grid
      container
      spacing={0}
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      <ChatBox
        currentText={currentText}
        handleChatBoxChange={handleChatBoxChange}
        handleEnter={handleEnter}
      />
    </Grid>
  ) : (
    <Grid
      container
      spacing={0}
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      {setTimeout(() => {
        return <h1>Nice try</h1>;
      }, 5000)}
    </Grid>
  );
}
