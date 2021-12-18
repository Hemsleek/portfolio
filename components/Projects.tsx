import React from "react";
import ProjectCard, { IProject } from "./ProjectCard";

const Projects = ({ projectsData = [] }: { projectsData?: IProject[] }) => {
  return (
    <section className="mt-[10.62rem] w-full flex flex-col items-center gap-y-[7.75rem]">
      {projectsData.map((project, projectIndex) => (
        <ProjectCard key={`project-number${projectIndex}`} {...project} />
      ))}
    </section>
  );
};

export default Projects;
