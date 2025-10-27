import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Courses from "../components/Courses";

const About = () => {
  const techStack = [
    "React & Next.js",
    "Node.js & Express",
    "Python & FastAPI",
    "PostgreSQL & SQLite",
    "Tailwind CSS",
    "Git & GitHub",
    "JavaScript & TypeScript",
    "C# & .NET",
  ];

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-12">
        
        {/* Row 1 */}
        {/* Grid 1 - Introduction - Spans 2 rows */}
        <div className="relative flex items-end overflow-hidden md:col-span-6 md:row-span-2 h-[20rem] md:h-full grid-default-color hover:-translate-y-1 duration-200">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[2.5] md:right-0 md:top-5 lg:scale-[2]"
            alt="Coding workspace"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Christian Hernandez</p>
            <p className="subtext">
              Software Engineering student at UT Arlington with experience building full-stack applications using React, Node.js, Python, and modern web technologies.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Globe */}
        <div className="relative overflow-hidden md:col-span-6 h-[18rem] grid-black-color hover:-translate-y-1 duration-200">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Arlington, Texas, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Row 2 */}
        {/* Grid 3 - Contact CTA */}
        <div className="relative overflow-hidden md:col-span-6 h-[18rem] grid-special-color hover:-translate-y-1 duration-200">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Row 3 */}
        {/* Grid 4 - Courses - Spans full width */}
        <div className="relative overflow-hidden md:col-span-12 h-[25rem] md:h-[20rem] grid-default-color hover:-translate-y-1 duration-200">
          <Courses />
        </div>

        {/* Row 4 */}
        {/* Grid 5 - Tech Stack - Full width with text list and orbiting icons */}
        <div className="relative overflow-hidden md:col-span-12 h-[22rem] md:h-[20rem] grid-default-color hover:-translate-y-1 duration-200">
          <div className="flex items-center justify-between h-full p-6">
            {/* Left side - Text content and list */}
            <div className="z-10 flex-1 max-w-md">
              <p className="mb-3 text-2xl font-semibold text-white">Tech Stack</p>
              <p className="mb-4 text-sm text-neutral-400">
                I specialize in a variety of languages, frameworks, and tools
              </p>
              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-lavender" />
                    <span className="text-sm text-neutral-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Orbiting icons (contained) */}
            <div className="relative flex items-center justify-center w-[300px] h-[300px] flex-shrink-0">
              <div className="scale-75">
                <Frameworks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;