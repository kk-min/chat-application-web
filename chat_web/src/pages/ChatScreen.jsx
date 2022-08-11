import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography, Box, List, ListItem } from "@mui/material";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChatBox from "../components/ChatBox";
import ChatWindow from "../components/ChatWindow";

export default function ChatScreen(props) {
  const [loggedIn, setLoggedIn] = React.useState(null);

  useEffect(() => {
    //Set up observer on user authentication:
    //Set up observer on user authentication:
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("Authorization granted.");
        setLoggedIn(true);
      } else {
        // User is signed out
        console.log("Not authorized.");
        setLoggedIn(false);
      }
    });
  }, [loggedIn]);

  return loggedIn ? (
    <Grid
      container
      spacing={0}
      direction="column"
      p={2}
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      <ChatWindow userName={props.userName} />
      <ChatBox userName={props.userName} />
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
