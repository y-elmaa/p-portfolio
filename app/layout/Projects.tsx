import React from "react";
import { projects } from "../components/content";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="py-20 px-4 md:px-8 bg-neutral-950 text-white"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Projects
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.Title}
              href={project.links}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="h-full bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {project.image ? (
                  <div className="relative h-48 overflow-hidden bg-neutral-800">
                    <img
                      src={project.image}
                      alt={project.Title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-neutral-400 text-sm uppercase tracking-wider">
                        Project
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-medium tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.Title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {project.Description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7m0 0l-7 7m7-7H5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
