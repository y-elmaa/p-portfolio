import React from "react";
import { links, projects } from "../components/content";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-wrap justify-center gap-6 p-6">
  {projects.map((project, index) => {
    const colors = [
      "bg-red-900", "bg-blue-900", "bg-green-900",
      "bg-yellow-900", "bg-purple-900", "bg-pink-900",
      "bg-indigo-900", "bg-teal-900", "bg-orange-900"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
      <Link
        className="cardp"
        target="_blank"
        rel="noopener noreferrer"
        key={project.Title}
        href={links[index]}
      >
        <div className="card bg-base-100 w-96 shadow-sm">
          {project.image ? (
            <figure>
              <img
                src={project.image}
                alt={project.Title}
                className="w-full h-48 object-cover"
              />
            </figure>
          ) : (
            <div className={`w-full h-48 flex items-center justify-center ${randomColor} text-white text-2xl font-bold`}>
              {project.Title}
            </div>
          )}
          <div className="card-body">
            {project.image && <h2 className="card-title">{project.Title}</h2>}
            <p>{project.Description}</p>
          </div>
        </div>
      </Link>
    );
  })}
</section>

  );
};

export default Projects;
