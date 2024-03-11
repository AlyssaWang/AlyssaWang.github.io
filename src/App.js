import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import propic from "./files/alyssa.jpg";
import { useWindowDimensions } from "./getWindowDimensions";
import "./App.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "var(--blue-light)",
  },
  title: {
    backgroundColor: "var(--navy)",
    color: "var(--white)",
    padding: "10px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      color: "var(--white)",
    },
  },
});

function App() {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const fullScreen = width > 500;

  const link = (url, text) => (
    <a href={url} rel="noreferrer" target="_blank" className={classes.link}>
      {text}
    </a>
  );

  return (
    <Box className={classes.root}>
      <img id="profile-pic" src={propic} alt="Alyssa Wang"></img>
      <Box className="typewriter" sx={{ mb: 1, width: fullScreen ? 'auto' : "60%" }}>
        <Typography
          variant="h3"
          className={classes.title}
          sx={{ textWrap: fullScreen ? '' : "balance !important" }}
        >
          Alyssa Wang
        </Typography>
      </Box>
      <Typography className={classes.text}>
        Senior SWE at {link("https://www.mitre.org/", "\u00A0MITRE")}
      </Typography>
      <Typography className={classes.text}>
        {link("https://www.williams.edu/", "Williams College")}{"\u00A0"}'20
      </Typography>
      <Typography className={classes.text}>
        {link("https://csci.williams.edu/", "Computer Science")}
        {"\u00A0"}•{"\u00A0"}
        {link("https://comp-lit.williams.edu/", "Comparative Literature")}
      </Typography>
      <Typography className={classes.text}>
        {link("https://github.com/AlyssaWang", "GitHub")}
        {"\u00A0"}•{"\u00A0"}
        {link("https://linkedin.com/in/alyssacwang", "LinkedIn")}
      </Typography>
    </Box >
  );
}

export default App;
