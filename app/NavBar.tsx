"use client";
import { IoMdHome } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { useLink, links } from "./hooks/useLink";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const { page, setPage } = useLink();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLinks = () =>
    links.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          onClick={() => setPage(link.label)}
          className={page === link.label ? "text-blue-400 font-bold" : ""}
        >
          {link.label}
        </a>
      </li>
    ));

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center gap-2 text-white font-light tracking-tight hover:text-blue-400 transition-colors"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-lg">YE</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {renderLinks()}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="Yahya Elmaaroufi CV.pdf"
              download="Yahya Elmaaroufi CV.pdf"
              className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-700 rounded-lg hover:border-blue-400"
            >
              Resume
            </a>
            <a
              href="https://github.com/y-elmaa?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-all"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <div
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-900 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">{renderLinks()}</div>

            <div className="pt-4 border-t border-neutral-900 flex gap-3">
              <a
                href="Yahya Elmaaroufi CV.pdf"
                download="Yahya Elmaaroufi CV.pdf"
                className="flex-1 px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-700 rounded-lg hover:border-blue-400 text-center"
              >
                Resume
              </a>
              <a
                href="https://github.com/y-elmaa?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg transition-all"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
