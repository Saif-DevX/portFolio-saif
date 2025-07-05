import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import heroImage from "../assets/Hero.jpg";
import MatrixCanvas from "./MatrixCanvas";

const techIcons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaGithub />, name: "GitHub" },
];

const Hero = () => {
  motion.div;
  const [radius, setRadius] = useState(170);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      setRadius(width < 640 ? 100 : 170);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section id="home" className="relative overflow-auto scroll-hidden bg-black text-white lg:py-32 md:py-10 sm:py-15 py-10">

      <MatrixCanvas />

      {/* Colored glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 flex lg:gap-0 md:gap-20 sm:gap-20 gap-20 flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-4xl lg:text-[43px] font-extrabold mb-6 leading-tight">
            Hi, I’m
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent select-none pl-3">
               Saif Ur Rehman
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "I build modern websites 🌐",
              2000,
              "React & Tailwind Enthusiast 💡",
              2000,
              "Frontend Developer 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-indigo-400 font-semibold"
          />

          <p className="mt-6 text-gray-300 max-w-md mx-auto lg:mx-0">
            Crafting responsive, high-performance UIs that blend modern design
            with real-world usability — built with React, Tailwind, and creative
            passion.
          </p>

          <div className="mt-8">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95, rotate: -1 }}
              href="#projects"
              className="relative inline-block px-8 py-3 font-bold text-white bg-indigo-600 rounded-full shadow-lg transition duration-300 hover:bg-indigo-700 group"
            >
              <span className="absolute inset-0 rounded-full bg-indigo-500 blur opacity-70 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10">See My Work</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Image + Rotating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] sm:w-[320px] sm:h-[320px] mt-12 lg:mt-0"
        >
          {/* Halo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500 opacity-30 rounded-full blur-3xl z-0 animate-pulse"></div>

          {/* Profile Image */}
          <motion.div
            className="relative z-10 w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={heroImage}
              alt="Coder Saif"
              className="rounded-full select-none object-cover w-full h-full border-4 border-black"
            />
          </motion.div>

          {/* Rotating Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {techIcons.map((tech, i) => {
                const angle = (i / techIcons.length) * 2 * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={i}
                    className="absolute text-3xl text-white bg-indigo-600 p-3 rounded-full shadow-md hover:scale-110 transition-all duration-300"
                    style={{
                      top: `calc(50% + ${y}px - 24px)`,
                      left: `calc(50% + ${x}px - 24px)`,
                    }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
