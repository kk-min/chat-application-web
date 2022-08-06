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
import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

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

  useEffect(() => {
    setCurrentList([
      "Hello",
      "Goodbye",
      "Ok?",
      "Goodbye",
      "Goodbye",
      "Goodbye",
      "Goodbye",
      "Goodbye",
      "Goodbye",
      "Goodbye",
      "Goodbye",
      "Goodbye",
    ]);
    console.log(currentList);
  }, []);
  return (
    <div>
      <Virtuoso
        style={{ minHeight: "90vh", flexGrow: 1, display: "flex" }}
        data={currentList}
        components={MUIComponents}
        itemContent={(index, item) => {
          return <ChatBubble message={item} type="sent"></ChatBubble>;
        }}
      ></Virtuoso>
    </div>
  );
}
