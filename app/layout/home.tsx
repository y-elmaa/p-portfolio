import React from "react";
import galaxy from "../../public/galaxy.jpeg";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="hero min-h-screen">
      <Image
        src={galaxy}
        alt="Galaxy"
       fill
        quality={75}
        priority
      />
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold typing ">Je suis Yahya</h1>
          <p className="mb-5 typing text-2xl">
            a développeur full stack web et mobile
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
