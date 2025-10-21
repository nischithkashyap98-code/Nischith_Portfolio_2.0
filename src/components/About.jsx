import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mt-24 mb-16">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-pop font-bold text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-6 card p-6"
      >
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate <span className="text-[#b8912b] font-semibold">Software Engineer</span> with
          a strong focus on <span className="text-[#b8912b] font-semibold">Full-Stack Development</span> and{" "}
          <span className="text-[#b8912b] font-semibold">DevOps Engineering</span>.
          I enjoy crafting user-centric web experiences, automating workflows, and
          applying mechanical innovation to software solutions.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 card">
            <h4 className="font-semibold text-[#b8912b]">Frontend & UI</h4>
            <p className="text-sm text-gray-300">
              React.js, Tailwind CSS, Figma, Framer Motion
            </p>
          </div>

          <div className="p-4 card">
            <h4 className="font-semibold text-[#b8912b]">Backend & DevOps</h4>
            <p className="text-sm text-gray-300">
              Node.js, Express, MongoDB, Docker, AWS
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
