import React, { useState, useCallback, useRef } from "react";
import { TextField, Grid, Button, Box } from "@mui/material";
import {
  doc,
  setDoc,
  Timestamp,
  onSnapshot,
  query,
  collection,
  documentId,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

const lastq = query(
  collection(db, "chat_history"),
  orderBy(documentId(), "desc"),
  limit(1)
);

export default function ChatBox(props) {
  const [currentText, setCurrentText] = useState("");
  const [currentID, setCurrentID] = useState();

  const handleChatBoxChange = (event) => {
    setCurrentText(event.target.value);
  };

  const handleSend = useCallback(async () => {
    console.log(currentText);
    console.log(currentID);
    if (currentText == "") {
      console.log("Empty string found.");
      return;
    }
    setDoc(doc(db, "chat_history", currentID.toString()), {
      name: props.userName,
      message: currentText,
      timestamp: Timestamp.now(),
    });
    setCurrentText("");
    console.log("Message sent.");
  }, [currentText]);

  const handleEnter = (event) => {
    if (event.key == "Enter" && event.shiftKey) {
      return;
    } else if (event.key == "Enter") {
      handleSend();
      event.preventDefault();
    }
  };

  useEffect(() => {
    const lastunsubscribe = onSnapshot(lastq, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setCurrentID(parseInt(doc.id, 10) + 1);
        console.log("Latest ID: ", doc.id);
      });
    });
  }, [currentID]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={1}
    >
      <Grid item xs={8} sm={11} alignItems="center" justifyContent="center">
        <TextField
          id="chatBox"
          multiline
          fullWidth
          value={currentText}
          onChange={handleChatBoxChange}
          variant="filled"
          onKeyDown={handleEnter}
          sx={{ fontSize: 50 }}
        ></TextField>
      </Grid>
      <Grid
        item
        alignItems="center"
        justifyContent="center"
        xs={4}
        sm={1}
        mb={1}
      >
        <Button variant="contained" size="large" onClick={handleSend}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
