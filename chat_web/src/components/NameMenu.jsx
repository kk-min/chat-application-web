import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NameMenu(props) {
  const [currentName, setCurrentName] = useState("");
  const navigate = useNavigate();

  const submitName = (name) => {
    props.setLoading(true);
    setTimeout(() => {
      props.setUserName(name);
      navigate("/chat");
    }, 2000);
  };

  return (
    <Box container>
      <Typography
        id="title"
        variant="h4"
        sx={{ padding: 3, fontWeight: "bold", color: "secondary.main" }}
      >
        Welcome!
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          label="Enter name"
          type="search"
          onChange={(event) => {
            setCurrentName(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              submitName(currentName);
            }
          }}
        ></TextField>
      </Box>
      <Button
        sx={{ margin: 2 }}
        color="primary"
        variant="contained"
        onClick={() => submitName(currentName)}
      >
        <b>Chat with Min</b>
      </Button>
    </Box>
  );
}
