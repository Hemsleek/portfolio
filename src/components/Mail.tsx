import React from "react";

const Mail = ({ email = "YOUREMAIL@GMAIL.COM" }) => {
  return (
    <section id="contact" className="flex justify-center mt-[12.5rem] ">
      <div className="flex flex-col items-center md:max-w-[34.18rem]">
        <span className="text-center text-[1.125rem] text-[#4F4F4F] dark:text-h-grey">
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </span>
        <a
          href={`mailto:${email.toLowerCase()}`}
          className="mt-[1.5rem] text-center font-bold text-[1.7rem] md:text-[2.25rem] text-[#313131] dark:text-white cursor-pointer"
        >
          {email}
        </a>
      </div>
    </section>
  );
};

export default Mail;
