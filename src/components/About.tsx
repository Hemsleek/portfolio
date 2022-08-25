import React from "react";

const About = ({ about = "" }) => {
  return (
    <section id="about" className="mt-[13.15rem] md:pl-[5.5rem]  ">
      <div className="title flex items-center  space-x-3 text-[2rem] md:text-[4rem] font-bebas">
        <h3 className="text-h-grey ">ABOUT</h3>
        <h3 className="text-h-black dark:text-white">ME</h3>
      </div>
      <p className="mt-[1.56rem] text-black dark:text-h-grey max-w-[19.5rem] md:max-w-[43.625rem] font-manrope">
        {about
          ? about
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate hendrerit accumsan, sed placerat. Sodales aenean feugiat pellentesque viverra tristique tempus, mollis. Velit volutpat amet, adipiscing consectetur nulla aenean pellentesque. Sit eleifend netus odio id. Egestas quam proin id pharetra tristique arcu pretium. Bibendum scelerisque nisl ac pulvinar malesuada condimentum. Semper ullamcorper velit adipiscing faucibus vel porta ac pharetra, venenatis. Cursus pellentesque faucibus egestas feugiat quam non enim. Pharetra ultricies amet, ligula egestas sem congue libero. Eu arcu donec sit elit. Mi aliquet urna, diam quis lorem gravida velit est. Arcu urna dapibus et nisi, eleifend turpis id amet."}
      </p>
    </section>
  );
};

export default About;
