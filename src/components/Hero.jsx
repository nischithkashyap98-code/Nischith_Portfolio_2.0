import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center md:flex-row overflow-hidden"
    >
      {/* Banner Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner.png"
          alt="Portfolio Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-20 relative">
        {/* Left Section: Intro */}
        <div className="md:w-7/12 text-white text-center md:text-left">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold leading-tight text-[#b8912b] drop-shadow-lg"
          >
            Nischith Kashyap S
          </motion.h1>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-200 max-w-xl mx-auto md:mx-0 text-base md:text-lg"
          >
            Software Engineer | DevOps Engineer | Mechanical Innovator
          </motion.p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-[#b8912b] text-black px-5 py-3 rounded-lg font-semibold shadow-md hover:scale-[1.02] transition-all text-sm md:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-500 px-4 py-3 rounded-lg text-gray-200 hover:border-[#b8912b] transition-all text-sm md:text-base"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Section: Profile Card */}
        <div className="md:w-5/12 flex justify-center md:justify-end mt-10 md:mt-0">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-5 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-[#b8912b]/50 shadow-xl hover:shadow-[#b8912b]/30 transition-all w-72 sm:w-80"
          >
            <img
              src="/assets/profile.JPG"
              alt="Nischith"
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-lg object-cover border-2 border-[#b8912b] mx-auto"
            />
            <div className="mt-4 text-center">
              <div className="text-lg font-semibold text-white">
                Nischith Kashyap S
              </div>
              <div className="text-sm text-gray-300 mt-1">
                Full-Stack & DevOps • Mechanical
              </div>
              <a
                href="/assets/resume.pdf"
                download
                className="inline-block mt-3 text-xs text-black bg-[#b8912b] px-3 py-2 rounded hover:opacity-90 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center: CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full flex justify-center gap-6 mt-10 md:mt-0 absolute md:bottom-10 left-0 px-4 md:px-0"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/nischithkashyap98-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-[#b8912b] text-[#b8912b] rounded-full hover:bg-[#b8912b] hover:text-black transition-all shadow-md text-sm md:text-base"
          >
            <FaGithub className="text-lg md:text-xl" />
            <span className="font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nischith-kashyap-s-aa413a389/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-[#b8912b] text-[#b8912b] rounded-full hover:bg-[#b8912b] hover:text-black transition-all shadow-md text-sm md:text-base"
          >
            <FaLinkedin className="text-lg md:text-xl" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
