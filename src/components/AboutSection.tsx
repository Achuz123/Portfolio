import { Briefcase, GraduationCap, User, Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  // Define variants with explicit typing
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Hook for scroll-triggered animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Handle resume download (placeholder function)
  const handleDownloadResume = () => {
    // Replace with actual resume file URL or logic
    window.open("/path-to-your-resume.pdf", "_blank");
  };

  return (
    <section
      id="about"
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
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>
        </div>

        {/* Grid Layout for Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Who I Am Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4 transform hover:scale-110 transition-transform">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Who I Am</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate software developer specializing in cybersecurity
              and machine learning. I thrive on tackling complex challenges,
              crafting innovative solutions, and delivering seamless user
              experiences with a blend of technical expertise and creativity.
            </p>
          </motion.div>

          {/* Education Card with Timeline */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4 transform hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <ul className="space-y-6 relative">
              <div className="absolute left-4 top-0 h-full w-1 bg-blue-200"></div>
              <li className="relative pl-10">
                <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="font-medium text-gray-900">
                  B.Tech in Computer Science
                </div>
                <div>Vellore Institute of Technology, Bhopal</div>
                <div className="text-sm text-gray-500">2021 - 2025</div>
              </li>
              <li className="relative pl-10">
                <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="font-medium text-gray-900">
                  Higher Secondary Education
                </div>
                <div>L'ecole Chempaka</div>
                <div className="text-sm text-gray-500">2020 - 2022</div>
              </li>
            </ul>
          </motion.div>

          {/* Experience Card with Timeline */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4 transform hover:scale-110 transition-transform">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Experience
              </h3>
            </div>
            <ul className="space-y-6 relative">
              <div className="absolute left-4 top-0 h-full w-1 bg-blue-200"></div>
              <li className="relative pl-10">
                <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="font-medium text-gray-900">
                  Software Development Intern
                </div>
                <div>BLUESTOCKS</div>
                <div className="text-sm text-gray-500">
                  May 2025 - July 2025
                </div>
                <div className="mt-1 text-gray-600">
                  Developed a production-level IPO Web Application and REST API
                  using React.js, Tailwind CSS, Django REST Framework, and
                  PostgreSQL. Implemented IPO listing features, API endpoints,
                  and integrated document downloads (RHP/DRHP).
                </div>
              </li>
              <li className="relative pl-10">
                <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="font-medium text-gray-900">HR</div>
                <div>Factsome Tv</div>
                <div className="text-sm text-gray-500">
                  November 2022 - May 2023
                </div>
                <div className="mt-1 text-gray-600">
                  Managed technical recruitment, intern onboarding, and
                  coordinated with development teams to align hiring with
                  project needs.
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Download Resume Button */}
        <div className="mt-12 text-center">
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
