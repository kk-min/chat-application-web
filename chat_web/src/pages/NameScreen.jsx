import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import LoginMenu from "../components/LoginMenu";
import CircularProgress from "@mui/material/CircularProgress";
import ConnectionFailed from "../components/SecretFail";
import ChatBubble from "../components/ChatBubble";
import NameMenu from "../components/NameMenu";
import NameFail from "../components/NameFail";

export default function NameScreen(props) {
  const [loading, setLoading] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      {loading ? (
        <CircularProgress size={60} />
      ) : invalidName ? (<NameFail setInvalidName={setInvalidName}/>) : (
        <NameMenu setLoading={setLoading} setInvalidName={setInvalidName} setUserName={props.setUserName} />
      )}
    </Grid>
  );
}
