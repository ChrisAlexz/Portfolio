import { useState } from "react";
import { motion } from "motion/react";
import { myProjects } from "../constants";
import ProjectDetails from "../components/ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="relative c-space section-spacing">
      <div className="mb-12">
        <h2 className="text-heading">Featured Projects</h2>
        <p className="mt-3 text-lg text-neutral-400">
          A selection of projects showcasing my expertise in full-stack development, AI integration, and modern web technologies
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-storm to-indigo border border-white/10 hover:border-lavender/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lavender/20"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo via-transparent to-transparent" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-lavender/10 text-lavender border border-lavender/20"
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-3 h-3 brightness-0 invert"
                    />
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 px-4 py-2 text-sm font-medium transition-all duration-200 border rounded-lg text-lavender border-lavender/40 hover:bg-lavender/10 hover:border-lavender"
                >
                  View Details
                </button>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-royal to-lavender hover:from-lavender hover:to-royal"
                >
                  Live Demo
                  <img src="assets/arrow-up.svg" className="w-3 h-3" alt="External link" />
                </a>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 bg-gradient-to-br from-lavender/5 via-transparent to-royal/5" />
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;