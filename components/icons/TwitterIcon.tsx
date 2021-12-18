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
      d="M22.162 5.656a8.383 8.383 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.73 1.86 3.48a4.168 4.168 0 0 1-1.894-.522v.052a4.185 4.185 0 0 0 3.355 4.1 4.209 4.209 0 0 1-1.89.073A4.185 4.185 0 0 0 7.97 16.65a8.393 8.393 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.41 1.88c7.692 0 11.9-6.373 11.9-11.9 0-.18-.006-.362-.014-.54a8.495 8.495 0 0 0 2.087-2.165v-.001Z"
      fill={props.theme === "dark" ? "#fff" : "#171717"}
    />
  </svg>
);

export default SvgComponent;
