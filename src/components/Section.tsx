// import { url } from "inspector";
import { NextPage } from "next";
import React from "react";
import { appState } from "../entity";

interface ISection {
  rightPadding?: boolean;
  bg?: string;
}

const Section: NextPage<ISection> = ({ children, rightPadding = true, bg }) => {
  const { theme } = appState.use();

  const background = bg
    ? `url("../public/imgs/${bg}.png")`
    : theme === "light"
    ? "white"
    : "black";

  return (
    <section
      style={{ background }}
      className={`pl-52 ${rightPadding ? "pr-52" : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
