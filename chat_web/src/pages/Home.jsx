import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import LoginMenu from "../components/LoginMenu";
import CircularProgress from "@mui/material/CircularProgress";
import SecretFail from "../components/SecretFail";
import ChatBubble from "../components/ChatBubble";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [connectionFailed, setConnectionFailed] = useState(false);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "background.default" }}
    >
      {connectionFailed ? (
        <SecretFail setConnectionFailed={setConnectionFailed} />
      ) : loading ? (
        <CircularProgress size={60} />
      ) : (
        <LoginMenu
          setLoading={setLoading}
          setConnectionFailed={setConnectionFailed}
        />
      )}
    </Grid>
  );
}
