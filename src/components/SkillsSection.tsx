import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";
import { SKILLS } from "../constants";

const SkillsSection = () => {
  // Define variants for card animations
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Hook for scroll-triggered animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Handle download skills summary (placeholder)
  const handleDownloadSkills = () => {
    // Replace with actual logic or file URL
    window.open("/path-to-skills-summary.pdf", "_blank");
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
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
            My Skills
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
            A comprehensive overview of my technical expertise across various
            domains
          </motion.p>
        </div>

        {/* Grid Layout for Skill Categories */}
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
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#dbeafe",
                      color: "#1e40af",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Skills Summary Button */}
      </div>
    </section>
  );
};

export default SkillsSection;
