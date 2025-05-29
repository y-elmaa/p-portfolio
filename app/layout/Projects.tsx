import React from "react";
import { links, projects } from "../components/content";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-wrap justify-center gap-6 p-6">
      {projects.map((project, index) => (
        <Link
          className="cardp"
          target="_blank"
          rel="noopener noreferrer"
          key={project.Title}
          href={links[index]}
        >
          <div className="   card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="  card-body">
              <h2 className="  card-title">{project.Title}</h2>
              <p>{project.Description}</p>
              <div className="  card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Projects;
