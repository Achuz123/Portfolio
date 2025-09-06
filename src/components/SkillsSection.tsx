import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "../constants";

const SkillsSection = () => {
  // Animation variants for the main cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for the skill pills inside the cards
  const pillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto"></div>
        </motion.div>

        {/* Grid Layout for Skill Categories */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              // Glassmorphism effect: semi-transparent background, backdrop blur, and a subtle border
              className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 backdrop-blur-lg"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-violet-400 mb-4 capitalize">
                {/* A more readable category title */}
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>

              {/* Staggered animation for the pills within each card */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-slate-700/80 text-slate-200 rounded-lg text-sm font-medium"
                    variants={pillVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#8b5cf6",
                      color: "#ffffff",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
