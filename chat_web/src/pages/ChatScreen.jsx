import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
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
  const [loggedIn, setLoggedIn] = React.useState(null);

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
