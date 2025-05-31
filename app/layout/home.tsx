import React from "react";
import galaxy from "../../public/galaxy.jpeg";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="hero min-h-screen overflow-hidden">
      <Image
        src={galaxy}
        alt="Galaxy"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
      />

      <div className="hero-content  text-center">
        <div className="max-w-md">
          <h1 className="mb-5  text-xl sm:text-5xl font-bold typing ">
            Je suis Yahya
          </h1>
         <p className="mb-5 typing text-base sm:text-xl flex flex-col">
  <span>a développeur full stack web</span>
  <span>et mobile</span>
</p>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
