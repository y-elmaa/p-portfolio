import React from "react";
import galaxy from "../../public/galaxy.webp";
import Image from "next/image";
import { userName } from "../components/constant";
const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <Image
        src={galaxy}
        alt="Galaxy"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
        placeholder="blur"
        className="opacity-20"
      />

      <div className="relative z-10 text-center px-4 md:px-8">
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
              {userName}
            </h1>
            <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-transparent mx-auto"></div>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mx-auto">
            full stack web developer crafting digital experiences with attention
            to detail
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <a
              href="#Projects"
              className="px-8 py-2.5 bg-white text-neutral-950 text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors"
            >
              View Work
            </a>
            <a
              href="#Contact"
              className="px-8 py-2.5 border border-neutral-600 text-white text-sm font-medium rounded-full hover:border-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-neutral-500 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
