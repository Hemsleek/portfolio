import Image from "next/image";
import React from "react";
import { appTheme, toggleTheme } from "../entity";
import { IName } from "../utils/types";

const NavBar = ({
  name = "Your Name",
  navLinks = Array(3).fill("Link"),
}: IName) => {
  const theme = appTheme.use();

  return (
    <nav className="px-[14.245rem] bg-white dark:bg-transparent dark:text-white flex items-center justify-between h-10">
      <h2 className="p-2 font-bold ">{name}</h2>
      <div className="flex items-center gap-8">
        {navLinks.map((link, linkIndex) => (
          <a href="#" key={`nav-link-${linkIndex}`} className="p-2">
            {link}
          </a>
        ))}
        <Image
          className="ml-4"
          onClick={toggleTheme}
          width={32}
          height={32}
          src={`/vectors/${theme}-icon.svg`}
          alt="theme-icon"
        />
      </div>
    </nav>
  );
};

export default NavBar;
