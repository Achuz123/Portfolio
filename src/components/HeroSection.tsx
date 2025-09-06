import { ArrowDown } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 animated-gradient text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Text content with animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block text-slate-200">Hello, I'm</span>
                <span className="block text-violet-400">Achuth B</span>
              </h1>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "Security Specialist",
                  2000,
                  "Full-Stack Engineer",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-xl md:text-2xl text-slate-300"
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-300 text-lg max-w-2xl">
              I'm passionate about building secure, efficient, and user-friendly
              applications. With expertise in cryptography, full-stack
              development, and machine learning, I create solutions that make a
              difference.
            </p>

            {/* Social links with SVGs embedded directly */}
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-slate-300 hover:text-violet-400"
                >
                  <div className="h-12 w-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 shadow-lg flex items-center justify-center">
                    {link.name === "LinkedIn" && (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    )}
                    {link.name === "GitHub" && (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    )}
                    {link.name === "LeetCode" && (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
                      </svg>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 flex space-x-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-violet-600 text-white font-medium rounded-md shadow-lg hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-slate-700/50 text-slate-200 font-medium rounded-md shadow-md hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Static circular profile picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl">
              <img
                src="/img.jpg"
                alt="Achuth B"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="#about"
            className="animate-bounce p-2 bg-slate-800/50 rounded-full shadow-md text-slate-300 hover:text-violet-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
