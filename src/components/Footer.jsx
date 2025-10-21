import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpCircle } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-[#0b0b0b] to-[#000000] text-gray-300 py-12 mt-24 overflow-hidden">
      {/* Top Divider (Gradient Wave) */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent opacity-60 blur-md"></div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-8 relative z-10">
        {/* Animated Thank You Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#b8912b] text-lg font-semibold tracking-wide"
        >
          ✨ Thank you for visiting my portfolio ✨
        </motion.p>

        {/* Divider Line */}
        <div className="w-2/3 border-t border-[#b8912b]/20 mt-4"></div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm text-gray-400"
        >
          © 2025 <span className="text-[#b8912b]">Nischith Kashyap S</span> — Built with{" "}
          <span className="text-[#b8912b] font-medium">React</span>,{" "}
          <span className="text-[#b8912b] font-medium">Tailwind</span> &{" "}
          <span className="text-[#b8912b] font-medium">Framer Motion</span>.
        </motion.p>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#b8912b] text-black w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        whileHover={{ rotate: 8 }}
      >
        <FiArrowUpCircle className="text-2xl" />
      </motion.button>
    </footer>
  );
}
