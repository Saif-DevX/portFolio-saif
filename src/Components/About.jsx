import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import AboutImage from "../assets/Hero.jpg";

const About = () => {
  motion.div;
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white py-24 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute top-[-80px] left-[-60px] w-96 h-96 bg-indigo-500 opacity-30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-60px] w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-[120px] animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 sm:p-12 md:p-16 shadow-xl"
      >
        {/* 🔥 Modern Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-44 h-44 sm:w-52 sm:h-52"
          >
            {/* Halo Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 blur-2xl opacity-20 animate-pulse" />

            {/* Glassy Rotating Ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow"
              style={{
                borderTopColor: "#8b5cf6", // indigo-500
                borderRightColor: "#a855f7", // purple-500
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
              }}
            />

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-500 bg-white/5 backdrop-blur-lg shadow-2xl">
              <img
                src={AboutImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Subtle Light Reflection */}
            <div className="absolute top-1 left-1 w-full h-full rounded-full bg-white opacity-5 blur-md pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-400 mb-6"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed"
        >
          I’m a passionate frontend developer focused on crafting interactive,
          high-performance UIs using React, Tailwind CSS, and Framer Motion.
          Every project blends functionality with modern visual polish.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <HoverCard
            icon={<FaCode />}
            title="Clean Code"
            text="Write scalable, maintainable components with modern stacks."
          />
          <HoverCard
            icon={<FaRocket />}
            title="Performance First"
            text="Optimized animations, lazy loading, blazing fast UIs."
          />
          <HoverCard
            icon={<FaLightbulb />}
            title="Creative UI"
            text="Modern, expressive UI design that delights users."
          />
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "GitHub",
            "UI/UX Design",
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative px-5 py-2 text-sm font-semibold text-white border border-indigo-500 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%_200%] bg-pos-100 rounded-full backdrop-blur-md shadow-md transition-all duration-500 hover:bg-pos-0 hover:shadow-indigo-500/30"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-16 space-y-6 max-w-3xl mx-auto"
        >
          {[
            {
              year: "2024",
              event: "Started learning HTML, CSS, JS, React & Tailwind CSS",
            },
            { year: "2025", event: "Built multiple UI projects & mini apps" },
            { year: "2025", event: "Launched this portfolio & job hunting" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-indigo-400 font-bold w-20">{item.year}</div>
              <p className="text-gray-300">{item.event}</p>
            </div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {[
            { number: "5+", label: "Projects" },
            { number: "1 Year", label: "Experience" },
            { number: "100%", label: "Frontend Focus" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-lg shadow-md"
            >
              <h3 className="text-3xl font-bold text-indigo-400">
                {stat.number}
              </h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 space-x-6 text-center"
        >
          <a
            href="/Saif_ur_Rehman_React.js_intern_CV.pdf"
            download="Saif-ur-Rehman-React.Js_intern CV.pdf"
            className="inline-block px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold shadow-lg"
          >
            Download Resume
          </a>

          <a
            href="/Saif_ur_Rehman_React.js_intern_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold shadow-lg"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Tilt Feature Card
const HoverCard = ({ icon, title, text }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareColor="#ffffff"
    glareBorderRadius="20px"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    className="rounded-xl"
  >
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center shadow-xl backdrop-blur-xl transition duration-300 hover:shadow-indigo-600/30"
    >
      <div className="text-4xl text-indigo-400 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{text}</p>
    </motion.div>
  </Tilt>
);

export default About;
