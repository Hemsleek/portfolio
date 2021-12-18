import Image from "next/image";
import React from "react";

interface IHero {
  pictureLink?: string;
  name?: string;
  role?: string;
  pictureBgColor?: string;
}

const Hero = ({
  pictureLink = "default",
  name = "Your Name",
  role = "FullStack Developer",
  pictureBgColor,
}: IHero) => {
  return (
    <section className="hero mt-[7.25rem] mb-[2.375rem] flex flex-col items-center">
      {pictureLink === "default" ? (
        <Image
          src="/vectors/default-pic.svg"
          alt="default-img"
          width={72}
          height={72}
        />
      ) : (
        <div
          style={{ background: "#B4A9F7", backgroundColor: pictureBgColor }}
          className="relative w-[72px] h-[72px] rounded-full"
        >
          <Image
            className="absolute bottom-0 "
            src="/vectors/default-pic.svg"
            alt="default-img"
            width={72}
            height={72}
          />
        </div>
      )}
      <div className="flex flex-col items-center mt-[1.37rem] font-normal">
        <span className="text-sm ">Hello,I'm</span>
        <h3 className="text-h-black text-[4rem] leading-none ">{name}</h3>
        <span className="text-h-grey text-[4rem] leading-none">{role}</span>
      </div>
    </section>
  );
};

export default Hero;
