import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginMenu(props) {
  const [secret, setSecret] = useState("");
  const navigate = useNavigate();

  const submitSecret = (secret) => {
    props.setLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "chatwithmink@gmail.com", secret)
        .then((userCredential) => {
          console.log("Signed in!");
          // Signed in
          props.setLoading(false);
          const user = userCredential.user;
          navigate("/chat");
        })
        .catch((error) => {
          console.log("Connection failed!");
          props.setLoading(false);
          props.setConnectionFailed(true);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }, 2000);
  };

  return (
    <Box container>
      <Typography
        id="title"
        variant="h3"
        sx={{ padding: 3, fontWeight: "bold" }}
      >
        Chat with Min
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          label="Enter secret"
          type="password"
          onChange={(event) => {
            setSecret(event.target.value);
          }}
        ></TextField>
        <Button
          sx={{ margin: 2 }}
          color="primary"
          variant="contained"
          onClick={() => submitSecret(secret)}
        >
          Connect
        </Button>
      </Box>
    </Box>
  );
}
