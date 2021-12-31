import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

function ItemEndSpacer({ darkMode }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      width: 500,
      height: 100,
      backgroundColor: darkMode ? "#24305E" : "white",
    },
  });
  const classes = useStyles();

  return <Box className={classes.root} />;
}

export default ItemEndSpacer;
