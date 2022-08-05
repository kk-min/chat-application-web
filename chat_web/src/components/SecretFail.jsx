import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function SecretFail(props) {
  return (
    <Box container>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        You do not know the secret!
      </Typography>
      <Button
        sx={{ margin: 2 }}
        color="primary"
        variant="contained"
        onClick={() => {
          props.setConnectionFailed(false);
        }}
      >
        Return
      </Button>
    </Box>
  );
}
