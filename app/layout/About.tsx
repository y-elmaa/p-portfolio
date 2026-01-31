"use client";

const About = () => {
  const skills = [
    "NextJS",
    "React",
    "Express",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Flutter",
    "Kotlin",
    "Java",
    "C#",
  ];
  return (
    <section
      id="About"
      className="py-20 px-4 md:px-8 bg-neutral-950 text-white"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            About
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-neutral-300 leading-relaxed text-lg">
              I'm a full-stack developer passionate about creating clean,
              efficient, and user-centric digital solutions. With expertise
              across modern web technologies and mobile development, I bring
              ideas to life through code.
            </p>

            <p className="text-neutral-300 leading-relaxed text-lg">
              I thrive on solving complex problems, learning new technologies,
              and collaborating with teams to build products that make a
              difference.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 font-mono text-sm overflow-x-auto">
            <div className="space-y-2 text-neutral-400">
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-white">developer</span>
                <span className="text-blue-400"> = </span>
                <span className="text-neutral-500">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-neutral-300">name:</span>{" "}
                <span className="text-green-400">'Yahya'</span>
                <span className="text-neutral-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-neutral-300">role:</span>{" "}
                <span className="text-green-400">'Full Stack Developer'</span>
                <span className="text-neutral-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-neutral-300">traits:</span>{" "}
                <span className="text-neutral-500">{"["}</span>
              </div>
              <div className="ml-8 space-y-1">
                <div>
                  <span className="text-green-400">'hardworking'</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div>
                  <span className="text-green-400">'fast learner'</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div>
                  <span className="text-green-400">'problem solver'</span>
                </div>
              </div>
              <div className="ml-4">
                <span className="text-neutral-500">{"],"}</span>
              </div>
              <div>
                <span className="text-neutral-500">{"}"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-light tracking-tight">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm hover:border-blue-500 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
