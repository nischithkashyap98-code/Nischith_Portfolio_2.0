import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
  ];

  // 🧠 Auto-hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Hide navbar
      } else {
        setVisible(true); // Show navbar
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="navbar"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 dark:bg-white/10 border-b border-gray-800/40 dark:border-gray-300/20 transition-all"
        >
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <motion.a
              href="#hero"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-serif font-bold text-[#b8912b] hover:opacity-80"
            >
              NISCHITH<span className="text-gray-400">•PORTFOLIO</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-gray-200 dark:text-gray-100 font-medium hover:text-[#b8912b] transition-all"
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-200 dark:text-gray-100"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/80 dark:bg-white/10 backdrop-blur-lg border-t border-gray-700"
            >
              <div className="flex flex-col items-center py-4 gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-gray-200 dark:text-gray-100 hover:text-[#b8912b] transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
