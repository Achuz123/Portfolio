import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto"></div>
        </motion.div>

        {/* Projects List Container */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-lg transition-all duration-300 hover:bg-slate-800/80 hover:border-violet-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                {/* Left Side: Title & Description */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700 text-violet-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Links */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  {/* --- Conditional "Live Demo" button --- */}
                  {project.title ===
                    "Screenly – Movie Ticket Booking Web App" && (
                    <a
                      href="https://screeenly.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.link} // Reminder: Add a 'githubUrl' to your constants
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
