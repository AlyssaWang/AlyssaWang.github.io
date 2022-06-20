import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TitleSidebar from "../components/TitleSidebar";
import ItemCard from "../components/ItemCard";
import ItemEndSpacer from "../components/ItemEndSpacer";
import { projectsList } from "../data/projectList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minWidth: "fit-content",
    height: "100%",
    backgroundColor: "#F8E9A1",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TitleSidebar title="Projects" file="projects.pdf" text={[]} />
      <Box className={classes.cardContainer}>
        <ItemEndSpacer darkMode={true} />
        {projectsList.map((project, i) => (
          <ItemCard
            id={`${project.id}-${i}`}
            key={`${project.id}-${i}`}
            index={i}
            link={project.link}
            title={project.title}
            subtitle={project.subtitle}
            textList={project.textList}
          />
        ))}
        <ItemEndSpacer darkMode={projectsList.length % 2 === 1} />
      </Box>
    </Box>
  );
}

export default Projects;
