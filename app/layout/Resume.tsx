import React from "react";
import Image from "next/image";
const Resume = () => {
  return (
    <section id="Resume" className="flex justify-center items-center p-8">
      <a href="Yahya Elmaaroufi CV.pdf" download="Yahya Elmaaroufi CV.pdf">
        <Image
          src="/Yahya Elmaaroufi CV.jpg"
          alt="resume"
          width={1000}
          height={1414}
          priority
        />
      </a>
    </section>
  );
};

export default Resume;
