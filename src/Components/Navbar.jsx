import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  motion.div;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionOffsets = navLinks.map((link) => {
        const el = document.getElementById(link.toLowerCase());
        return el ? { link, offset: el.offsetTop } : null;
      });

      const current = sectionOffsets
        .filter(Boolean)
        .reverse()
        .find((section) => scrollPosition >= section.offset - 80);
      if (current) setActiveLink(current.link);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-screen z-50 bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent select-none"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Saif Ur Rehman
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className={`relative text-lg font-medium transition-all duration-300 ${
                activeLink === link
                  ? "text-indigo-500 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              whileHover={{ scale: 1.08 }}
              onClick={() => setActiveLink(link)}
            >
              {link}
              {activeLink === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-500 dark:bg-indigo-400 rounded"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Mobile menu toggle button only */}

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden text-gray-800 dark:text-gray-200"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col gap-6 p-6 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(link);
                  setMenuOpen(false);
                }}
                className={`text-lg font-medium ${
                  activeLink === link
                    ? "text-indigo-500 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;