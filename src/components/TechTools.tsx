import React from "react";

const TechTools = ({
  technologies = ["REACTJS", "NEXTJS", "REACT NATIVE", "NODE"],
  tools = ["HTML", "CSS", "JAVASCRIPT", "PYTHON"],
}) => {
  return (
    <section className="mt-[4.5rem] md:pl-[5.5rem] flex flex-col gap-y-[4rem] md:grid grid-cols-2  gap-x-[9.8rem] md:gap-y-0">
      <div className="technologies">
        <h3 className="text-h-black dark:text-white text-[1.7rem] md:text-[2.25rem] ">
          TECHNOLOGIES
        </h3>
        <div className="grid grid-cols-2 text-black dark:text-h-grey mt-[1.875rem] gap-y-4 gap-x-[5rem] md:gap-x-[2.5rem]">
          {technologies.map((tech, techIndex) => (
            <span key={`${tech}-index${techIndex}`}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="tools">
        <h3 className="text-h-black text-[1.7rem] md:text-[2.25rem] dark:text-white ">
          TOOLS
        </h3>
        <div className="grid grid-cols-2 text-black dark:text-h-grey mt-[1.875rem] gap-y-4 gap-x-[5rem] md:gap-x-[2.5rem]">
          {tools.map((tool, toolIndex) => (
            <span key={`${tool}-index${toolIndex}`}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTools;
