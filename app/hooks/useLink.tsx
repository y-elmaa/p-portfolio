import { useEffect, useState } from "react";

export const links = [
  { label: "About", href: "#About" },
  { label: "Projects", href: "#Projects" },
 
  { label: "Contact", href: "#Contact" },
];

export const useLink = () => {
  const [page, setPage] = useState("");

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
  return { page, setPage };
};
