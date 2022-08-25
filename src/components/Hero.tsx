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
    <section
      id="hero-section"
      className="hero mt-[7.25rem] mb-[2.375rem] flex flex-col items-center"
    >
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
          className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center "
        >
          {/* <Image
            className="absolute bottom-0 "
            src="/vectors/default-pic.svg"
            alt="default-img"
            width={72}
            height={72}
          /> */}
          <span className=" text-[3.5rem] lg:text-[2.8rem] ">👨‍💻</span>
        </div>
      )}
      <div className="flex flex-col items-center mt-[1.37rem] font-normal font-bebas">
        <span className="text-sm dark:text-white font-manrope">
          Hello,I&apos;m
        </span>
        <h3 className="text-h-black my-1  text-center dark:text-white text-[1.7rem] md:text-[4rem] leading-none ">
          {name}
        </h3>
        <span className="text-h-grey text-[1.7rem] text-center md:text-[4rem] leading-none">
          {role}
        </span>
      </div>
    </section>
  );
};

export default Hero;
