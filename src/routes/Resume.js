import React from "react";
import ItemCard from "../components/ItemCard";
import ItemEndSpacer from "../components/ItemEndSpacer";
import { jobsList } from "../data/jobsList";
import Page from "../components/Page";

function Resume() {
  return (
    <Page title="Resume" file="resume.pdf" bgColor="var(--purple)">
      <ItemEndSpacer darkMode={true} />
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
      <ItemEndSpacer darkMode={jobsList.length % 2 === 1} />
    </Page>
  );
}

export default Resume;
