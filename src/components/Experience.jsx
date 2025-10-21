import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCogs, FaGlobe } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Digitech Solutions",
      role: "Software Developer",
      duration: "Feb 2024 – Feb 2025",
      icon: <FaLaptopCode className="text-[#b8912b] text-3xl" />,
      details: [
        "Developed and deployed high-performance web applications improving workflow efficiency by 30%.",
        "Collaborated with teams to build responsive UI and robust backend APIs.",
        "Implemented API integrations reducing latency and enhancing UX.",
        "Contributed to scalable architecture and mentored junior developers.",
      ],
    },
    {
      company: "Contentor (My Own Startup)",
      role: "Founder & Web Developer",
      duration: "Jan 2022 – Dec 2023",
      icon: <FaGlobe className="text-[#b8912b] text-3xl" />,
      details: [
        "Built and launched an eBook platform supporting 1K+ monthly visitors.",
        "Developed a MERN-stack CMS for authors and readers.",
        "Handled AWS deployment, security, and performance optimization.",
        "Delivered multiple freelance websites and SEO-optimized solutions.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-serif font-bold text-[#b8912b] text-center mb-12"
      >
        Professional Experience
      </motion.h2>

      <div className="relative border-l-2 border-[#b8912b]/60 dark:border-[#b8912b]/40 pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[2.15rem] top-0 bg-[#b8912b] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              {exp.icon}
            </div>

            {/* Content */}
            <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-[#b8912b]/30 p-6 rounded-lg shadow hover:shadow-[#b8912b]/30 transition-all">
              <h3 className="text-2xl font-bold text-[#b8912b]">
                {exp.role}
              </h3>
              <p className="text-gray-300 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>

              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.details.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
