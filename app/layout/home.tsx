import React from "react";
import galaxy from "../../public/galaxy.webp";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="hero min-h-screen overflow-hidden relative ">
      <Image
        src={galaxy}
        alt="Galaxy"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
         placeholder="blur"
      />

      <div className="hero-content  text-center">
        <div className="max-w-md">
          <h1 className="mb-5  text-xl sm:text-5xl font-bold typing ">
            Yahya Elmaroufi
          </h1>
         <p className="mb-5 typing text-base sm:text-2xl flex flex-col">
  <span>a full stack web developer</span>
   
</p>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
