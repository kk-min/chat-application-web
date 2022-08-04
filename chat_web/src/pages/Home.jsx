import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "blue",
  },
}));

export default function() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
