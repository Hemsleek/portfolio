import React from "react";

const Footer = ({ name = "Your Name", copyrightYear = "2021" }) => {
  return (
    <footer className="px-52 bg-white mb-[2.187rem] flex items-center justify-between">
      <div className="socials flex items-center gap-x-[1.81rem] font-medium"></div>
      <div className="flex items-center text-[0.875rem]">
        <span className="border-r-[1px] border-r-h-black pr-2 mr-2 font-medium">
          Copyright © {copyrightYear}
        </span>

        <span className="font-semibold">{name}</span>
      </div>
    </footer>
  );
};

export default Footer;
