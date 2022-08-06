import React from "react";
import { TextField, Grid, Button, Box, ListItem, List } from "@mui/material";
import ChatBubble from "./ChatBubble";
import { Virtuoso } from "react-virtuoso";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const testList = () => {
  return (
    <List>
      <ListItem>
        <ChatBubble message="Message 1" type="sent" />
      </ListItem>
      <ListItem>
        <ChatBubble message="Message 2" type="sent" />
      </ListItem>
      <ListItem>
        <ChatBubble message="Message 3" type="received" />
      </ListItem>
      <ListItem>
        <ChatBubble message="Message 4" type="sent" />
      </ListItem>
      <ListItem>
        <ChatBubble message="Message 5" type="received" />
      </ListItem>
      <ListItem>
        <ChatBubble message="Message 6" type="received" />
      </ListItem>
      <ListItem>
        {" "}
        <ChatBubble message="Message 7" type="sent" />
      </ListItem>
    </List>
  );
};

export default function ChatWindow(props) {
  const [currentList, setCurrentList] = useState();

  useEffect(() => {
    setCurrentList(testList);
  }, [currentList]);

  return (
    <Virtuoso data={currentList} itemContent={(index, item) => item}></Virtuoso>
  );
}
