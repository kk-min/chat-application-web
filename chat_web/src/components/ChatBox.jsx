import React from "react";
import { TextField, Grid, Button, Box } from "@mui/material";

export default function ChatBox(props) {
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
          value={props.currentText}
          onChange={props.handleChatBoxChange}
          variant="filled"
          onKeyDown={props.handleEnter}
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
        <Button variant="contained" size="large">
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
