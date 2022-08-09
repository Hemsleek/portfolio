import * as React from "react";
import { SVGProps } from "react";
import { ISocialsSvg } from "../../utils/types";

const SvgComponent = (props: ISocialsSvg) => (
  <svg
    width="1.5rem"
    height="1.5rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 10.202 9.303 12 12 13.798 14.697 12 12 10.202Zm4.5.596L19.197 9 13 4.869v3.596l3.5 2.333Zm3.5.07L18.303 12 20 13.13V10.869Zm-3.5 2.334L13 15.535v3.596L19.197 15 16.5 13.202ZM11 8.465V4.869l-6.197 4.13L7.5 10.799 11 8.465ZM4.803 15 11 19.13v-3.595l-3.5-2.333L4.803 15Zm.894-3L4 10.869v2.262L5.697 12ZM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15V9Z"
      fill={props.theme === "dark" ? "#fff" : "#171717"}
    />
  </svg>
);

export default SvgComponent;
