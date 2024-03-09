import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useWindowDimensions } from "../getWindowDimensions";
import TitleSidebar from "./TitleSidebar";
import FileLink from "./FileLink";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "fit-content",
    height: "100%",
  },
  mobileRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "fit-content",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    padding: "10px",
  },
});

function Page({
  title,
  file,
  textSections = [],
  children,
  titleColor = "#24305E", // navy
  bgColor = "#A8D0E6" // pale blue
}) {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const fullScreen = width > 500;

  return (
    <Box
      className={fullScreen ? classes.root : classes.mobileRoot}
      sx={{ backgroundColor: bgColor }}
    >
      {fullScreen
        ?
        <TitleSidebar
          title={title}
          file={file}
          text={textSections}
        />
        :
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ mb: 2 }}>
          <Box className="typewriter" sx={{ mt: 10 }}>
            <Typography variant="h3" className={classes.title} sx={{ color: titleColor }}>
              {title.toUpperCase()}
            </Typography>
          </Box>
          {file && <FileLink file={file} />}
          {textSections.length > 0 &&
            <Box sx={{ m: 2 }}>
              {textSections.map((text, i) =>
                <Typography key={i} sx={{ mb: 2 }}>{text}</Typography>)}
            </Box>
          }
        </Box>
      }
      <Box className={classes.cardContainer}>
        {children}
      </Box>
    </Box>
  );
}

export default Page;
