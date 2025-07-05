import { ExternalLink, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../constants";

const ProjectCard = ({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) => {
  // Card animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group p-6"
      variants={cardVariants}
      whileHover={{ scale: 1.03, rotateY: 2, transition: { duration: 0.3 } }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <motion.span
            key={tag}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#dbeafe",
              color: "#1e40af",
            }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium podp-medium text-blue-600 hover:text-blue-800 transition-colors"
      >
        <motion.div
          className="ml-1"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ExternalLink size={16} />
        </motion.div>
      </a>
    </motion.div>
  );
};

const ProjectsSection = () => {
  // Hook for scroll-triggered animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
    >
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 bg-blue-50 opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header with Animated Underline */}
        <div className="mb-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing {PROJECTS.length} recent projects that highlight my
            skills and interests in various technical domains.
          </motion.p>
        </div>

        {/* Grid Layout for Project Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </motion.div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/Achuz123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            See more on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
