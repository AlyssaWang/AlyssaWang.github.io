import React, { useState, useEffect } from "react";
import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
      {file &&
        <Typography variant="overline" className={classes.fileLink}>
          <a href={pdf} target="_blank" className={classes.fileLink}>
            OPEN PDF
          </a>
        </Typography>
      }
      {text.map(t => (
        <Typography
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
