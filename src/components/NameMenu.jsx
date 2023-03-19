import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NameMenu(props) {
  const [currentName, setCurrentName] = useState("");
  const navigate = useNavigate();

  const handleEnter = (event) =>{
    if(event.key == "Enter"){
      submitName(currentName);
    }
    return
  }
  
  const submitName = (name) => {
    console.log("In submit name");
    props.setLoading(() => true);
    if(name === "Min"){
      setCurrentName("");
      props.setInvalidName(() => true);
      props.setLoading(() => false);
      console.log(currentName);
      return;
    }
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
          onKeyUp={handleEnter}
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
