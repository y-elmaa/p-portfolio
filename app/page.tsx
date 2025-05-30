import About from "./layout/About";
import Resume from "./layout/Resume";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import HomePage from "./layout/home";
import Image from "next/image";
import galaxy from "../public/galaxy.jpeg";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen overflow-hidden">
      <Image
        src={galaxy}
        alt="Galaxy"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
      />
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl sm:text-5xl font-bold typing ">Je suis Yahya</h1>
          <p className="mb-5 typing text-xl sm:text-xl">
            a développeur full stack web et mobile
          </p>
        </div>
      </div>
    </div>
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
