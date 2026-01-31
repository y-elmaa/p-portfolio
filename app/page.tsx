import About from "./layout/About";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import HomePage from "./layout/home";

export default function Home() {
  return (
    <div className="bg-neutral-950 text-white">
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
