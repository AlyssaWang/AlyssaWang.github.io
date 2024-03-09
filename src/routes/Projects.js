import React from "react";
import ItemCard from "../components/ItemCard";
import ItemEndSpacer from "../components/ItemEndSpacer";
import { projectsList } from "../data/projectList";
import Page from "../components/Page";

function Projects() {
  return (
    <Page title="Projects" file="projects.pdf" bgColor="#F8E9A1">
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
    </Page>
  );
}

export default Projects;
