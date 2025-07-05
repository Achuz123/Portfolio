import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Download } from "lucide-react";
import { CERTIFICATES } from "../constants";

const CertificateCard = ({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) => {
  // Card animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotate: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
      variants={cardVariants}
      whileHover={{ scale: 1.03, rotate: -1, transition: { duration: 0.3 } }}
    >
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Award className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2">{issuer}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </motion.div>
  );
};

const CertificatesSection = () => {
  // Hook for scroll-triggered animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Handle download certificates (placeholder)
  const handleDownloadCertificates = () => {
    window.open("/path-to-certificates.pdf", "_blank");
  };

  return (
    <section
      id="certificates"
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
            Certificates
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
            Showcasing {CERTIFICATES.length} professional certifications that
            validate my expertise in cybersecurity, development, and more.
          </motion.p>
        </div>

        {/* Masonry Grid Layout for Certificates */}
        <motion.div
          ref={ref}
          className="columns-1 md:columns-2 lg:columns-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {CERTIFICATES.map((cert) => (
            <div key={cert.title} className="mb-8 break-inside-avoid">
              <CertificateCard
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
