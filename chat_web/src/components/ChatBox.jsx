import React from "react";
import { TextField, Grid, Button, Box } from "@mui/material";

export default function ChatBox(props) {
  return (
    <Grid container direction="row" xs={12} alignItems="flex-end">
      <Grid item sx={{ padding: 2, paddingRight: 0 }} xs={11}>
        <TextField
          id="chatBox"
          multiline
          fullWidth
          maxRows={90}
          value={props.currentText}
          onChange={props.handleChatBoxChange}
          variant="filled"
          onKeyDown={props.handleEnter}
          sx={{ fontSize: 50 }}
        ></TextField>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 1, mb: 2, paddingLeft: 0 }}
        xs={1}
      >
        <Button variant="contained" size="large">
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
