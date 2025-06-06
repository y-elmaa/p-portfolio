"use client";
import { IoMdHome } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { useLink, links } from "./hooks/useLink";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const { page, setPage } = useLink();

  const renderLinks = () =>
    links.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          onClick={() => setPage(link.label)}
          className={page === link.label ? "text-primary font-bold" : ""}
        >
          {link.label}
        </a>
      </li>
    ));

  return (
    <div className="navbar  sticky top-0 z-50 backdrop-blur-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {renderLinks()}
          </ul>
        </div>
        <a href="#top" className="btn btn-ghost text-xl">
          <IoMdHome />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderLinks()}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-ghost sm:text-xl rounded-xl"
          href="Yahya Elmaaroufi CV.pdf"
          download="Yahya Elmaaroufi CV.pdf"
        >
          cv
        </a>
        <a
          className="btn btn-ghost sm:text-xl rounded-xl ml-2"
          href="mailto:elmaaroufiyahya19@gmail.com"
        >
          <FaGoogle />
        </a>
        <a
          className="btn btn-ghost sm:text-xl rounded-xl ml-2"
          href="https://github.com/y-elmaa?tab=repositories"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
