import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import AndroidSvg from "../../public/vectors/android.svg";
import IosSvg from "../../public/vectors/ios.svg";
export interface IProject {
  projectCoverBg?: string;
  projectDetailBg?: string;
  projectName?: string;
  projectDesc?: string;
  technologies?: String[];
  textColor?: string;
  projectUrl?: string;
  images?: string[];
  type?: "mobile" | "web";
  mobileUrl?: { type: "ios" | "android"; url: string }[];
}

const ProjectCard = ({
  projectCoverBg,
  projectDetailBg,
  projectName = "Project Title",
  projectDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at. ",
  technologies = ["Reactjs", "Nextjs", "SASS"],
  textColor,
  projectUrl,
  images = [],
  type = "web",
  mobileUrl = [],
}: IProject) => {
  const isImageAvailable = images.length !== 0;
  return (
    <div
      className={`${styles.project} project md:relative h-auto  md:h-[39.3rem]  w-full xl:w-[64rem] flex flex-col md:flex-row font-manrope`}
      style={textColor ? { color: textColor } : { color: "#fff" }}
    >
      <div
        style={{ background: "#C1E5C0", backgroundColor: projectCoverBg }}
        className="project-cover w-full md:w-[51.5rem] order-2 md:order-1   shadow-md"
      >
        {isImageAvailable && (
          <Image
            src={`/projectsImg/${images[0]}.png`}
            layout="responsive"
            width="51.5rem"
            height="39.3rem"
            loading="eager"
            alt={projectName}
            objectFit="cover"
            priority
          />
        )}
      </div>
      <div
        style={{ background: "#18191F", backgroundColor: projectDetailBg }}
        className={` right-0 ${styles.projectDetails} md:absolute  md:top-[2.5rem] w-full md:w-[21.23rem]  px-8 py-6 flex flex-col select-none order-1 md:order-2 text-[0.86rem]`}
      >
        <h4 className="font-semibold text-[1.5rem]">{projectName}</h4>
        <p className="mt-2 text-ellipsis  mb-6  font-thin">{projectDesc}</p>
        <div className="flex flex-wrap items-center gap-x-[1rem] font-medium">
          {technologies.map((tech, techIndex) => (
            <span key={`tech-index${techIndex}`}>{tech}</span>
          ))}
        </div>

        {type === "mobile" ? (
          <div className="flex items-center gap-x-6 mt-3">
            {mobileUrl.map((app) => (
              <a key={app.type} href={app.url} target="_blank" rel="noreferrer">
                <Image
                  src={app.type === "ios" ? IosSvg : AndroidSvg}
                  alt="download-icon"
                />
              </a>
            ))}
          </div>
        ) : (
          <a
            href={projectUrl ?? "#"}
            target="_blank"
            className={`flex items-center mt-3 text-[0.75rem] ${styles.viewProject}`}
            rel="noreferrer"
          >
            <span className="mr-2">View Project</span>
            <div className="arrow  w-[16px] h-[16px]">
              <Image
                src="/vectors/arrow.svg"
                layout="responsive"
                width={16}
                height={16}
                alt="arrow-icon"
              />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
