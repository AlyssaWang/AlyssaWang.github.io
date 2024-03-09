import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  fileLink: {
    fontSize: "1.0em !important",
    textDecoration: "none",
    "&:hover": {
      color: "var(--white)",
    },
  },
});

function FileLink({ file }) {
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
    <Typography variant="overline" className={classes.fileLink}>
      <a href={pdf} target="_blank" rel="noreferrer" className={classes.fileLink}>
        OPEN PDF
      </a>
    </Typography>
  );
}

export default FileLink;
