import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaDocker, FaReact, FaAward } from "react-icons/fa";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "KodNest, Bengaluru",
    date: "2024",
    description:
      "Comprehensive hands-on training in frontend, backend, and database technologies — including HTML, CSS, JavaScript, React, Node.js, and MySQL.",
    icon: <FaReact className="text-[#61DBFB]" />, // React logo
  },
  {
    title: "Cloud & DevOps Fundamentals",
    issuer: "Self-Learning (AWS, Docker, CI/CD)",
    date: "2025",
    description:
      "Built automation pipelines using Jenkins, Docker, and AWS. Focused on continuous integration, scalable deployment, and cloud-native infrastructure.",
    icon: <FaDocker className="text-[#0db7ed]" />, // Docker logo
  },
  {
    title: "AWS Cloud Practitioner (In Progress)",
    issuer: "Amazon Web Services",
    date: "Expected 2025",
    description:
      "Learning the fundamentals of AWS Cloud architecture, deployment, and infrastructure management.",
    icon: <FaAws className="text-[#FF9900]" />, // AWS logo
  },
];

// Animation variants for reveal effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Certification() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#b8912b]"
      >
        Certifications & Achievements
      </motion.h2>

      {/* Certificates Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(184,145,43,0.3)",
            }}
            className="relative bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-[#b8912b]/30 rounded-2xl p-6 shadow-lg transition-transform duration-300 overflow-hidden group"
          >
            {/* Glow animation background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b8912b]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {cert.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#b8912b]">
                {cert.title}
              </h3>
            </div>

            {/* Info */}
            <div className="relative z-10">
              <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mb-4 italic">{cert.date}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Award icon overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.15, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-3 right-4 text-[#b8912b] text-5xl opacity-20 pointer-events-none"
            >
              <FaAward />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-gray-400 text-sm text-center"
      >
        ✨ Continuously expanding skills to stay ahead in technology innovation.
      </motion.p>
    </section>
  );
}
