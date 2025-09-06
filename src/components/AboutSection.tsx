// src/components/AboutSection.tsx

import { Briefcase, GraduationCap, User, Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="h-1 bg-violet-500 mx-auto"
          ></motion.div>
        </div>

        {/* Grid Layout */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Card 1: Who I Am */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <div className="bg-violet-500/10 p-3 rounded-full mr-4">
                <User className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">Who I Am</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              I'm a passionate software developer specializing in cybersecurity
              and machine learning. I thrive on tackling complex challenges and
              crafting innovative solutions with a blend of technical expertise
              and creativity.
            </p>
          </motion.div>

          {/* Card 2: Education */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <div className="bg-violet-500/10 p-3 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">
                Education
              </h3>
            </div>
            <ul className="space-y-4 relative pl-6">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-700"></div>
              <li className="relative">
                <div className="absolute -left-[29px] top-1.5 w-4 h-4 bg-violet-500 rounded-full border-4 border-slate-800"></div>
                <div className="font-medium text-slate-200">
                  B.Tech in Computer Science Specializing in Cyber Security And
                  Digital Forensics
                </div>
                <div className="text-sm text-slate-400">
                  Vellore Institute of Technology, Bhopal (2021-2025)
                </div>
              </li>
              <li className="relative">
                <div className="absolute -left-[29px] top-1.5 w-4 h-4 bg-violet-500 rounded-full border-4 border-slate-800"></div>
                <div className="font-medium text-slate-200">
                  Higher Secondary
                </div>
                <div className="text-sm text-slate-400">
                  L'ecole Chempaka (2020-2022)
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Card 3: Experience */}
          <motion.div
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <div className="bg-violet-500/10 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200">
                Experience
              </h3>
            </div>
            {/* For brevity, experience items would go here in a similar timeline format */}
            <p className="text-slate-400 leading-relaxed">
              Interned at BLUESTOCKS, developing a full-stack IPO application.
              Previously managed technical recruitment as an HR at Factsome Tv.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
