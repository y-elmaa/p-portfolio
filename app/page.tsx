import About from "./layout/About";
import Resume from "./layout/Resume";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import HomePage from "./layout/home";

export default function Home() {
  return (
    <>
      <HomePage />
      <About />
      <Projects />
      
      <Contact />
    </>
  );
}
