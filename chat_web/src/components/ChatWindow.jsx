import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
  ListItem,
  List,
  ListSubheader,
  CircularProgress,
} from "@mui/material";
import ChatBubble from "./ChatBubble";
import { Virtuoso } from "react-virtuoso";
import { db } from "../firebase";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
const q = query(collection(db, "chat_history"), orderBy("timestamp"));

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
  const [currentList, setCurrentList] = useState([]);

  const navigate = useNavigate();
  const virtuoso = useRef(null);

  useEffect(() => {
    if (props.userName == null) {
      navigate("/name");
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("Received message list change!");
      const chat_history = [];
      querySnapshot.forEach((doc) => {
        chat_history.push({
          name: doc.data().name,
          message: doc.data().message,
        });
      });
      setCurrentList(chat_history.map((item) => item));
    });
  }, [navigate, props.userName]);

  return  (
    <Virtuoso
      ref={virtuoso}
      style={{ minHeight: "90vh", flexGrow: 1, display: "flex" }}
      data={currentList}
      initialTopMostItemIndex={currentList.length - 1}
      followOutput="smooth"
      components={MUIComponents}
      itemContent={(index, item) => {
        return (
          <ChatBubble
            message={item["message"]}
            type={item["name"] == props.userName ? "sent" : "received"}
            userName={item["name"]}
          ></ChatBubble>
        );
      }}
    ></Virtuoso>
  );
}
