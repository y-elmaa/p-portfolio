import React from 'react'
import Image from 'next/image'
const Resume = () => {
  return (
    <section id="Resume" className="flex justify-center items-center p-8">
 <Image
        src="/Yahya Elmaaroufi CV.jpg"
        alt="resume"
        width={1000} // adjust to your image's width
        height={1414} // adjust to your image's height
        className="w-full max-w-3xl h-auto"
        priority // optional: preload the image
      />
</section>

  )
}

export default Resume

{/* <img
    src="Yahya Elmaaroufi CV.jpg"
    alt="resume"
    className="w-full max-w-3xl h-auto"
  /> */}