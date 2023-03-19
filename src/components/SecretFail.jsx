import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function SecretFail(props) {
  const returnButton = useRef(null);
  useEffect(() => {
    returnButton.current.focus();
  });
  return (
    <Box container>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "secondary.main" }}>
        You do not know the secret!
      </Typography>
      <Button
        ref={returnButton}
        sx={{ margin: 2 }}
        color="primary"
        variant="contained"
        onClick={() => {
          props.setConnectionFailed(false);
        }}
      >
        <b>Return</b>
      </Button>
    </Box>
  );
}
