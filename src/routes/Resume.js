import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TitleSidebar from "../components/TitleSidebar";
import ItemCard from "../components/ItemCard";
import ItemEndSpacer from "../components/ItemEndSpacer";
import { jobsList } from "../data/jobsList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#bc97fd",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

function Resume() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TitleSidebar title="Resume" file="resume.pdf" />
      <Box className={classes.cardContainer}>
        <ItemEndSpacer darkMode={true}/>
        {jobsList.map((job, i) => (
          <ItemCard
            id={`${job.id}-${i}`}
            key={`${job.id}-${i}`}
            index={i}
            link={job.link}
            title={job.title}
            subtitle={job.subtitle}
            textList={job.textList}
          />
        ))}
        <ItemEndSpacer darkMode={jobsList.length % 2 === 1}/>
      </Box>
    </Box>
  );
}

export default Resume;
