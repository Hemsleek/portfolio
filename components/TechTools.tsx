import React from "react";

const TechTools = ({
  technologies = ["HTML", "CSS", "JAVASCRIPT"],
  tools = ["REACTJS", "NEXTJS", "NODE"],
}) => {
  return (
    <section className="mt-[4.5rem] pl-[5.5rem] grid grid-cols-2 gap-x-[9.8rem]">
      <div className="technologies">
        <h3 className="text-h-black text-[2.25rem] ">TECHNOLOGIES</h3>
        <div className="grid grid-cols-2 mt-[1.875rem] gap-y-4 gap-x-[1.375rem]">
          {technologies.map((tech, techIndex) => (
            <span key={`${tech}-index${techIndex}`}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="tools">
        <h3 className="text-h-black text-[2.25rem] ">TOOLS</h3>
        <div className="grid grid-cols-2 mt-[1.875rem] gap-y-4 gap-x-[1.375rem]">
          {tools.map((tool, toolIndex) => (
            <span key={`${tool}-index${toolIndex}`}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTools;
