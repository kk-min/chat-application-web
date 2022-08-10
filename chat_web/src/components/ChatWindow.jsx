import React from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
  ListItem,
  List,
  ListSubheader,
} from "@mui/material";
import ChatBubble from "./ChatBubble";
import { Virtuoso } from "react-virtuoso";
import { db } from "../firebase";
import { onSnapshot, query, collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const q = query(collection(db, "chat_history"));

const MUIComponents = {
  List: React.forwardRef(({ style, children }, listRef) => {
    return (
      <List
        style={{ padding: 0, ...style, margin: 0 }}
        component="div"
        ref={listRef}
      >
        {children}
      </List>
    );
  }),

  Item: ({ children, ...props }) => {
    return (
      <ListItem component="div" {...props} style={{ margin: 0 }}>
        {children}
      </ListItem>
    );
  },

  Group: ({ children, style, ...props }) => {
    return (
      <ListSubheader
        component="div"
        {...props}
        style={{
          ...style,
          backgroundColor: "white",
          margin: 0,
        }}
      >
        {children}
      </ListSubheader>
    );
  },
};

export default function ChatWindow(props) {
  const [currentList, setCurrentList] = useState();
  const [currentID, setCurrentID] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.userName == null) {
      navigate("/name");
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chat_history = [];
      querySnapshot.forEach((doc) => {
        chat_history.push({
          name: doc.data().name,
          message: doc.data().message,
        });
      });
      console.log("Current Chat History: ", chat_history.join(", "));
      setCurrentList(chat_history.map((item) => item));
      console.log(currentList);
    });

    console.log(currentID);
  }, []);

  return (
    <Virtuoso
      style={{ minHeight: "90vh", flexGrow: 1, display: "flex" }}
      data={currentList}
      components={MUIComponents}
      itemContent={(index, item) => {
        return (
          <ChatBubble
            message={item["message"]}
            type={item["name"] == props.userName ? "sent" : "received"}
          ></ChatBubble>
        );
      }}
    ></Virtuoso>
  );
}
