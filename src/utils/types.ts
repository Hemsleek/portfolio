import { SVGProps } from "react";

export type ITheme = "light" | "dark";

export interface IINITSTATE {
  theme: "light" | "dark";
  showMenu: boolean;
}

export interface IName {
  name?: string;
  navLinks?: Array<string>;
  resumeLink?: string;
}
export interface IMenu {
  navLinks?: Array<string>;
}

export interface ISocialsSvg extends SVGProps<SVGSVGElement> {
  theme: ITheme;
}
