import React from 'react'

const HomePage = () => {
  return (
    <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(galaxy.jpeg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold typing ">Je suis Yahya</h1>
            <p className="mb-5 typing text-2xl">a développeur full stack web et mobile</p>
            
          </div>
        </div>
      </div>
  )
}

export default HomePage