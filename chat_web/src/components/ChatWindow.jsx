import React from "react";
import { TextField, Grid, Button, Box } from "@mui/material";
import { VariableSizeList } from "react-window";

export default function ChatWindow() {
  return (
    <VariableSizeList
      itemCount={10000}
      itemSize={getChatBubbleSize}
    ></VariableSizeList>
  );
}
