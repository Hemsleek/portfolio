import Image from "next/image";
import React from "react";
import { appState, toggleMenu } from "../entity";
import { scrollToElement } from "../utils/helpers";
import { IMenu } from "../utils/types";

const Menu = ({ navLinks = Array(3).fill("Link") }: IMenu) => {
  const { theme, showMenu } = appState.use();

  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[150%]"
      } w-[60%] md:hidden flex absolute top-0  flex-col p-5  shadow-md font-bebas bg-white z-50 transition-[right] duration-500 ease-in-out`}
    >
      <div className="w-[1.8rem] h-[1.8rem] self-end">
        <Image
          onClick={toggleMenu}
          width={24}
          height={24}
          src={`/vectors/menu-fold-light.svg`}
          alt="menu-icon"
          layout="responsive"
        />
      </div>
      <div className="links flex flex-col gap-y-2 mt-4">
        {navLinks.map((link, linkIndex) => (
          <span
            onClick={() => {
              scrollToElement(link);
              toggleMenu();
            }}
            key={`nav-link-${linkIndex}`}
            className="p-2 capitalize select-none"
          >
            {link}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Menu;
