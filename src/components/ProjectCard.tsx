import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
export interface IProject {
  projectCoverBg?: string;
  projectDetailBg?: string;
  projectName?: string;
  projectDesc?: string;
  technologies?: String[];
  textColor?: string;
  projectUrl?: string;
}

const ProjectCard = ({
  projectCoverBg,
  projectDetailBg,
  projectName = "Project Title",
  projectDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at. ",
  technologies = ["Reactjs", "Nextjs", "SASS"],
  textColor,
  projectUrl,
}: IProject) => {
  return (
    <div
      className={`${styles.project} project relative  h-[39.3rem] w-full xl:w-[64rem] flex flex-col md:flex-row font-manrope`}
      style={textColor ? { color: textColor } : { color: "#fff" }}
    >
      <div
        style={{ background: "#C1E5C0", backgroundColor: projectCoverBg }}
        className="project-cover w-full md:w-[51.5rem] order-2 md:order-1  h-full"
      ></div>
      <div
        style={{ background: "#18191F", backgroundColor: projectDetailBg }}
        className={` right-0 ${styles.projectDetails} md:absolute  top-[2.5rem] w-full md:w-[21.23rem]  px-8 py-6 flex flex-col select-none order-1 md:order-2 `}
      >
        <h4 className="font-semibold text-[1.5rem]">{projectName}</h4>
        <p className="mt-2 text-ellipsis  mb-6 font-extralight">
          {projectDesc}
        </p>
        <div className="flex items-center gap-x-[1rem] font-medium">
          {technologies.map((tech, techIndex) => (
            <span key={`tech-index${techIndex}`}>{tech}</span>
          ))}
        </div>
        <a
          href={projectUrl ?? "#"}
          className="flex items-center mt-3 text-[0.75rem]"
        >
          <span className="mr-2">View Project</span>
          <Image
            src="/vectors/arrow.svg"
            width={16}
            height={16}
            alt="arrow-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
