// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 overflow-hidden">
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto text-center space-y-6"
      >
        <h3 className="text-3xl font-bold text-indigo-400">Saif DevX</h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Let's connect and build something amazing together. Follow me on social platforms below!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-indigo-300">
          <a
            href="https://github.com/Saif-DevX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 cursor-pointer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saif-ur-rehman-859056356/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 cursor-pointer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/SaifDevX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 cursor-pointer"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Saif DevX. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
