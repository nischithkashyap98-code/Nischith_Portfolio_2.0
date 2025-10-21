import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaAws, FaDocker, FaPython, FaJs, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiMysql } from "react-icons/si";

export default function SkillsAndEducation() {
  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center"
    >
      {/* --- SKILLS --- */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-serif font-bold text-[#b8912b] mb-10"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Each skill icon */}
        {[
          { Icon: FaReact, name: "React" },
          { Icon: SiTailwindcss, name: "TailwindCSS" },
          { Icon: FaPython, name: "Python" },
          { Icon: FaJs, name: "JavaScript" },
          { Icon: FaHtml5, name: "HTML5" },
          { Icon: FaCss3Alt, name: "CSS3" },
          { Icon: FaJava, name: "Java" },
          { Icon: FaAws, name: "AWS" },
          { Icon: FaDocker, name: "Docker" },
          { Icon: SiPostman, name: "Postman" },
          { Icon: SiMysql, name: "MySQL" },
        ].map(({ Icon, name }, i) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-gray-300"
          >
            <Icon className="text-5xl text-[#b8912b] mb-2" />
            <p className="text-sm">{name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* --- EDUCATION --- */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-serif font-bold text-[#b8912b] mt-20 mb-10"
      >
        Education
      </motion.h2>

      <div className="space-y-8 text-left max-w-3xl mx-auto">
        {/* B.E */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-4 border-[#b8912b] pl-6"
        >
          <h3 className="text-xl font-semibold text-[#b8912b]">
            Bachelor of Engineering (Mechanical Engineering)
          </h3>
          <p className="text-gray-300">Malnad College of Engineering (2019 – 2022)</p>
          <p className="text-gray-400 text-sm">Hassan, Karnataka</p>
        </motion.div>

        {/* Diploma */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border-l-4 border-[#b8912b] pl-6"
        >
          <h3 className="text-xl font-semibold text-[#b8912b]">
            Diploma in Mechanical Engineering
          </h3>
          <p className="text-gray-300">Rajeev Polytechnic (2015 – 2018)</p>
          <p className="text-gray-400 text-sm">Hassan, Karnataka</p>
        </motion.div>

        {/* SSLC */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-l-4 border-[#b8912b] pl-6"
        >
          <h3 className="text-xl font-semibold text-[#b8912b]">
            SSLC (High School)
          </h3>
          <p className="text-gray-300">Sri Aravinda High School (2013 – 2014)</p>
          <p className="text-gray-400 text-sm">Hassan, Karnataka</p>
        </motion.div>
      </div>
    </section>
  );
}
