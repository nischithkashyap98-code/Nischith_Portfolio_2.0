import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook, FaCloud, FaTools, FaHeartbeat } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const projects = [
    {
      title: "Contentor – eBook Platform",
      icon: <FaBook className="text-3xl text-[#b8912b]" />,
      shortDesc:
        "A full-stack eBook publishing and reading platform built with the MERN stack and secure AWS hosting.",
      description: `
Contentor is an online platform for digital book publishing and reading, developed using the MERN stack.
It includes user authentication, dynamic content management, and cloud-hosted deployment with AWS.
The system also features an admin panel for managing uploads, reviews, and analytics.`,
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS", "TailwindCSS"],
      image: "/assets/contentor.png",
    },
    {
      title: "CloudOps Pipeline – CI/CD Automation",
      icon: <FaCloud className="text-3xl text-[#b8912b]" />,
      shortDesc:
        "A DevOps project automating web app deployment using Jenkins, Docker, and AWS EC2 for continuous delivery.",
      description: `
CloudOps Pipeline automates software deployment from code commit to production.
It integrates Jenkins pipelines, Docker containers, and AWS EC2 hosting to streamline build, test, and deploy processes.`,
      tech: ["Jenkins", "Docker", "AWS EC2", "GitHub Actions", "Linux"],
      image: "/assets/cloudops.png",
    },
    {
      title: "Smart Tyre Inflation System",
      icon: <FaTools className="text-3xl text-[#b8912b]" />,
      shortDesc:
        "An automated system that monitors and inflates tyres based on air pressure using sensors and microcontrollers.",
      description: `
Smart Tyre Inflation System ensures consistent tyre pressure through automatic monitoring and inflation.
It uses pressure sensors and an Arduino-based controller to adjust air levels in real-time, enhancing safety and performance.`,
      tech: ["Arduino", "C++", "Sensors", "Embedded Systems", "IoT"],
      image: "/assets/smart_tyre.png",
    },
    {
      title: "Smart Pulse – System Monitor",
      icon: <FaHeartbeat className="text-3xl text-[#b8912b]" />,
      shortDesc:
        "A Python-based real-time system performance monitor with resource tracking, charts, and clean UI visualization.",
      description: `
Smart Pulse (SystemPulse) is a Python application that tracks CPU, memory, and disk usage in real time.
Built using Tkinter and Matplotlib, it provides visual analytics and performance graphs in a clean modern interface.`,
      tech: ["Python", "Tkinter", "Matplotlib", "psutil"],
      image: "/assets/smart_pulse.png",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-serif font-bold text-[#b8912b] mb-12"
      >
        Featured Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 dark:bg-black/30 p-6 rounded-lg shadow-lg hover:shadow-[#b8912b]/40 border border-[#b8912b]/20 backdrop-blur-sm hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedProject(proj)}
          >
            <div className="flex justify-center mb-4">{proj.icon}</div>
            <h3 className="text-xl font-semibold text-[#b8912b] mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{proj.shortDesc}</p>
            <button
              className="text-black bg-[#b8912b] px-4 py-2 rounded-lg font-semibold hover:scale-[1.05] transition-all"
            >
              About Project
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-[#121212] text-black dark:text-gray-200 max-w-2xl w-full p-8 rounded-xl relative shadow-xl border border-[#b8912b]/40 overflow-y-auto max-h-[85vh]"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-2 float-right text-[#b8912b] text-xl font-bold hover:scale-110 transition-transform"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-[#b8912b] mb-4">
                {selectedProject.title}
              </h3>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg shadow-lg mb-4"
              />

              <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">
                {selectedProject.description}
              </p>

              <h4 className="text-lg font-semibold text-[#b8912b] mt-4 mb-2">
                Tech Stack:
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-[#b8912b]/20 px-3 py-1 rounded-md border border-[#b8912b]/40"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
