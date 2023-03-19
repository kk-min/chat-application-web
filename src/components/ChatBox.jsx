import React, { useState, useCallback, useRef } from "react";
import { TextField, Grid, Button, Box } from "@mui/material";
import {
  doc,
  setDoc,
  Timestamp,
  onSnapshot,
  query,
  collection,
  orderBy,
  limit,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

const lastq = query(
  collection(db, "chat_history"),
  orderBy("timestamp", "desc"),
  limit(1)
);

export default function ChatBox(props) {
  const [currentText, setCurrentText] = useState("");

  const handleChatBoxChange = (event) => {
    setCurrentText(event.target.value);
  };

  const handleSend = async () => {
    console.log(currentText);
    if (currentText === "") {
      console.log("Empty string found.");
      return;
    }
    addDoc(collection(db, "chat_history"), {
      name: props.userName,
      message: currentText,
      timestamp: Timestamp.now(),
    });
    setCurrentText("");
    console.log("Message sent.");
  };

  const handleEnter = (event) => {
    if (event.key == "Enter" && event.shiftKey) {
      return;
    } else if (event.key == "Enter") {
      handleSend();
      event.preventDefault();
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      spacing={0}
    >
      <Grid item xs={8} sm={11} alignItems="center" justifyContent="center" sx={{mr: 0}} >
        <TextField
          id="chatBox"
          multiline
          fullWidth
          value={currentText}
          onChange={handleChatBoxChange}
          variant="filled"
          onKeyDown={handleEnter}
          sx={{ fontSize: 50}}
        ></TextField>
      </Grid>
      <Grid
        item
        alignItems="flex-start"
        justifyContent="flex-start"
        xs={4}
        sm={1}
        mb={1}
        sx={{ml: 0}}
      >
        <Button variant="contained" size="large" onClick={handleSend} >
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
