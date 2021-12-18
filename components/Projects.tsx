import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projectsData = [1] }) => {
  return (
    <section className="mt-[10.62rem] bg-red-200">
      {projectsData.map((project, projectIndex) => (
        <ProjectCard key={`project-number${projectIndex}`} />
      ))}
    </section>
  );
};

export default Projects;
