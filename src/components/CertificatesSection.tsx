import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "../constants";
import { ChevronDown, Award } from "lucide-react";

// First, we group the certificates by their issuer to create the accordion sections.
const groupedCertificates = CERTIFICATES.reduce((acc, cert) => {
  (acc[cert.issuer] = acc[cert.issuer] || []).push(cert);
  return acc;
}, {} as Record<string, typeof CERTIFICATES>);

const CertificatesSection = () => {
  // This state keeps track of which accordion section is currently open.
  // We'll set the first one ('EC-Council') to be open by default.
  const [expanded, setExpanded] = useState<string | false>("EC-Council");

  return (
    <section id="certificates" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & Credentials
          </h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto"></div>
        </motion.div>

        {/* Accordion container */}
        <div className="space-y-4">
          {Object.entries(groupedCertificates).map(([issuer, certs]) => {
            const isOpen = issuer === expanded;
            return (
              <motion.div
                key={issuer}
                className="bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-lg overflow-hidden"
                initial={{ borderRadius: 12 }}
              >
                <motion.header
                  initial={false}
                  onClick={() => setExpanded(isOpen ? false : issuer)}
                  className="flex justify-between items-center p-6 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-100">
                    {issuer}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.header>

                {/* AnimatePresence handles the smooth expand and collapse animations */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.section
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="px-6 pb-6"
                    >
                      <ul className="space-y-4 pt-4 border-t border-slate-700">
                        {certs.map((cert) => (
                          <li
                            key={cert.title}
                            className="flex items-start gap-4"
                          >
                            <Award className="h-5 w-5 text-violet-400 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-slate-200">
                                {cert.title}
                              </p>
                              <p className="text-sm text-slate-400">
                                {cert.date}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
