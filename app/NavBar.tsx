'use client';
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [page, setPage] = useState("");

  const links = [
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
    { label: "Resume", href: "#Resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) {
            current = link.label;
          }
        }
      }
      setPage(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="navbar sticky top-0 z-50 backdrop-blur-sm ">
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderLinks()}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
