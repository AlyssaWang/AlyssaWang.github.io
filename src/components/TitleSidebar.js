import React from "react";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FileLink from "./FileLink";

const useStyles = makeStyles({
  root: {
    width: "400px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "400px",
      boxSizing: "border-box",
      border: "none",
    },
  },
  title: {
    color: "var(--navy-dark)",
    padding: "10px",
  },
  text: {
    maxWidth: "200px",
    margin: "24px 0 0 0 !important",
    padding: "0 24px",
    display: "flex",
    justifyContent: "center",
    borderLeft: "3px dotted gray",
  },
});

function TitleSidebar({ title, file, text }) {
  const classes = useStyles();

  return (
    <Drawer className={classes.root} variant="permanent" anchor="left">
      <Toolbar />
      <Box className="typewriter">
        <Typography variant="h3" className={classes.title}>
          {title.toUpperCase()}
        </Typography>
      </Box>
      {file && <FileLink file={file} />
      }
      {text.map((t, i) => (
        <Typography
          key={i}
          variant="subtitle1"
          color="text.secondary"
          className={classes.text}
        >
          {t}
        </Typography>
      ))}
    </Drawer>
  );
}

export default TitleSidebar;
