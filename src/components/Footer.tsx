import React from "react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import CodepenIcon from "./icons/Codepen";
import TwitterIcon from "./icons/TwitterIcon";
import { appTheme } from "../entity";

interface ISocials {
  name?: string;
  copyrightYear?: string;
  socialsLink: {
    github?: string;
    linkedIn?: string;
    codePen?: string;
    twitter?: string;
  };
}

const Footer = ({
  name = "Your Name",
  copyrightYear = "2021",
  socialsLink,
}: ISocials) => {
  const theme = appTheme.use();

  return (
    <footer className=" px-[3rem] xl:px-52  py-4 bg-white dark:bg-transparent mb-[1.3125rem] flex flex-col md:flex-row items-center justify-between shadow-inner">
      <div className="socials flex items-center gap-x-[1.81rem] font-medium">
        <a
          className="animate-bounce hover:animate-none"
          href={socialsLink.github ?? "#"}
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon theme={theme} />
        </a>
        <a
          className="animate-bounce hover:animate-none"
          href={socialsLink.linkedIn ?? "#"}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon theme={theme} />
        </a>

        <a
          className="animate-bounce hover:animate-none"
          href={socialsLink.codePen ?? "#"}
          target="_blank"
          rel="noreferrer"
        >
          <CodepenIcon theme={theme} />
        </a>

        <a
          className="animate-bounce hover:animate-none"
          href={socialsLink.twitter ?? "#"}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon theme={theme} />
        </a>
      </div>
      <div className="flex items-center text-[0.875rem] text-h-black dark:text-white mt-3 md:mt-0">
        <span className="border-r-[1px] border-r-h-black dark:border-r-white pr-2 mr-2 font-medium">
          Copyright © {copyrightYear}
        </span>

        <span className="font-semibold">{name}</span>
      </div>
    </footer>
  );
};

export default Footer;
