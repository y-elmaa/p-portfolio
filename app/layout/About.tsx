'use client'
import React, { useState, useEffect, useRef } from "react";
import { about } from "../components/content";

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing after visible
        }
      },
      { threshold:0.3 } // 30% of section visible triggers animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="About"
      ref={sectionRef}
      className=" p-8"
    >
      <div
        className={`card flex-col lg:card-side bg-base-100 shadow-sm ${
          visible ? "slide-in-left" : "opacity-0"
        }`}
      >
        <figure className="w-full max-w-xs mx-auto lg:w-2/3">
          <img
            src={about.Image}
            alt="personal photo"
            className="w-full h-auto object-cover rounded"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-6xl">{about.Title}</h2>
          <p className="text-2xl">{about.Description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
