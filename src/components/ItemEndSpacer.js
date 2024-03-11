import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useWindowDimensions } from "../getWindowDimensions";

function ItemEndSpacer({ darkMode }) {
  const classes = makeStyles({
    root: {
      maxWidth: 500,
      height: 100,
      backgroundColor: darkMode ? "var(--navy-dark)" : "var(--white)",
    },
  });
  const { width } = useWindowDimensions();
  const fullScreen = width > 500;

  return <Box className={classes.root} sx={{ width: fullScreen ? 500 : "100%" }} />;
}

export default ItemEndSpacer;
