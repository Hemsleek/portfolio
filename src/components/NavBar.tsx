import Image from "next/image";
import React from "react";
import { appTheme, toggleTheme } from "../entity";
import { scrollToElement } from "../utils/helpers";
import { IName } from "../utils/types";

const NavBar = ({
  name = "Your Name",
  navLinks = Array(3).fill("link"),
  resumeLink = "#",
}: IName) => {
  const theme = appTheme.use();

  return (
    <nav className="px-[1.5rem] md:px-[3rem] xl:pl-[14.245rem] xl:pr-[10.245rem] bg-white dark:bg-transparent dark:text-white flex   items-center justify-between h-[20rem] drop-shadow-md font-bebas">
      <a
        href={resumeLink}
        target="_blank"
        className="flex md:hidden resume-box  items-center justify-center border-[1px] p-1   rounded-sm cursor-alias hover:bg-deep-blue hover:text-white hover:border-transparent transition-all delay-150 hover:dark:bg-white hover:dark:text-h-black"
        rel="noreferrer"
      >
        Resume
      </a>

      <h2
        onClick={() => scrollToElement("hero-section")}
        className=" p-2 font-bold cursor-pointer "
      >
        {name}
      </h2>
      <div className=" hidden md:flex items-center gap-8">
        {navLinks.map((link, linkIndex) => (
          <span
            onClick={() => scrollToElement(link)}
            key={`nav-link-${linkIndex}`}
            className="p-2 capitalize cursor-pointer select-none hover:animate-pulse"
          >
            {link}
          </span>
        ))}
        <div className="w-[2rem] h-[2rem] ml-4">
          <Image
            onClick={toggleTheme}
            width={32}
            height={32}
            src={`/vectors/${theme}-icon.svg`}
            alt="theme-icon"
            layout="responsive"
          />
        </div>
        <a
          href={resumeLink}
          target="_blank"
          className="resume-box flex items-center justify-center border-[1px] px-4 py-2 ml-4 rounded-sm cursor-alias hover:bg-deep-blue hover:text-white hover:border-transparent transition-all delay-150 hover:dark:bg-white hover:dark:text-h-black"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="md:hidden flex items-center gap-x-5 menu-theme">
        <div className="w-[2rem] h-[2rem]">
          <Image
            layout="responsive"
            onClick={toggleTheme}
            width={32}
            height={32}
            src={`/vectors/${theme}-icon.svg`}
            alt="theme-icon"
          />
        </div>
        <div className="w-[1.8rem] h-[1.8rem]">
          <Image
            // onClick={toggleTheme}
            width={24}
            height={24}
            src={`/vectors/menu-unfold-${theme}.svg`}
            alt="menu-icon"
            layout="responsive"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
