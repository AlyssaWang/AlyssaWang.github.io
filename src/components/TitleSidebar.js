import React, { useState, useEffect } from "react";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
// import "../styles/typewriter.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "40%",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      height: "80vh",
      alignItems: "center",
      justifyContent: "center",
      width: "40%",
      boxSizing: "border-box",
      border: "none",
    },
  },
  title: {
    color: "#24305E",
    padding: "10px",
  },
  fileLink: {
    fontSize: "1.0em !important",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
});

function TitleSidebar({ title, file }) {
  const classes = useStyles();
  const [pdf, setPdf] = useState(undefined);

  useEffect(() => {
    async function fetchFile() {
      if (file) {
        await import(`../files/${file}`).then((r) => {
          setPdf(r.default);
        });
      }
    }

    fetchFile();
  }, []);

  return (
    <Drawer className={classes.root} variant="permanent" anchor="left">
      <Toolbar />
      <Box className="typewriter">
        <Typography variant="h3" className={classes.title}>
          {title.toUpperCase()}
        </Typography>
      </Box>
      <Typography variant="overline" className={classes.fileLink}>
        <a href={pdf} target="_blank" className={classes.fileLink}>
          OPEN PDF
        </a>
      </Typography>
    </Drawer>
  );
}

export default TitleSidebar;
