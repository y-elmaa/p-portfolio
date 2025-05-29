"use client";
import React, { useState, useEffect, useRef } from "react";
import { about } from "../components/content";

const About = () => {
  return (
    <section id="About" className=" p-8">
      <div className="card flex-col lg:card-side bg-base-100 shadow-smopacity-0">
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
