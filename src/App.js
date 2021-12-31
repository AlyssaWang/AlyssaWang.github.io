import React from "react";
import { Box, Typography } from "@mui/material";
import propic from "./files/alyssa.jpg";
import "./App.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#A8D0E6",
  },
  title: {
    backgroundColor: "#24305E",
    color: "white",
    padding: "10px",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
});

function App() {
  const classes = useStyles();

  const link = (url, text) => (
    <a href={url} target="_blank" className={classes.link}>
      {text}
    </a>
  );

  return (
    <Box className={classes.root}>
      <img id="profile-pic" src={propic} alt="Alyssa Wang"></img>
      <Box className="typewriter" sx={{ marginBottom: "10px" }}>
        <Typography variant="h3" className={classes.title}>
          ALYSSA WANG
        </Typography>
      </Box>
      <Typography className={classes.text}>
        SWE at {link("https://www.mitre.org/", "\u00A0MITRE")}
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
    </Box>
  );
}

export default App;
