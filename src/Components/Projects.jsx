import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import EduImg from "../assets/edu.png"
import EcomImg from "../assets/store.png"
import BlogImg from "../assets/blog1.png"
import WorldImg from "../assets/world.png"
import SidcupImg from "../assets/sidcup.png"

const projects = [
  {
    title: "Education Academy",
    description:
      "A modern educational platform showcasing interactive course sections, animated hero, smooth navigation, and a responsive design using React and Tailwind CSS.",
    image: EduImg,
    tech: ["HTML","React","Tailwind"],
    github: "https://github.com/Saif-DevX/edu-academy-website",
    demo: "https://educationacadmia.netlify.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully responsive and visually rich e-commerce platform with product filtering, dynamic cart functionality, and immersive animations. Built using React, Tailwind CSS, and Framer Motion.",
    image: EcomImg,
    tech: ["HTML", "Tailwind", "React", "Framer Motion"],
    github: "https://github.com/Saif-DevX/E-commerce-Shopsy",
    demo: "https://shopsyecomeerce.netlify.app/",
  },
  {
    title: "Blog Website",
    description:
      "A sleek and modern blog platform crafted with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive layout, and a clean reading experience — perfect for sharing articles, thoughts, and insights with style.",
    image: BlogImg,
    tech: ["HTML", "Tailwind", "React"],
    github: "https://github.com/Saif-DevX/Blog-web",
    demo: "https://blogsaif.netlify.app/",
  },
  {
    title: "World Atlas",
    description:
      "A dynamic world atlas website built with React, Tailwind CSS, and Framer Motion. Features interactive maps, animated transitions, and responsive design for an immersive user experience.",
    image: WorldImg,
    tech: ["HTML", "Tailwind", "React"],
    github: "https://github.com/Saif-DevX/World-Atlas",
    demo: "https://worldatlasweb.netlify.app/",
  },
   {
    title: "Sidcup Family Golf-Club",
    description:
      "A dynamic world atlas website built with React, Tailwind CSS, and Framer Motion. Features interactive maps, animated transitions, and responsive design for an immersive user experience.",
    image: SidcupImg,
    tech: ["HTML", "Tailwind", "React", "Framer Motion"],
    github: "https://github.com/Saif-DevX/Sidcup-family-Golf",
    demo: "https://zesty-sunburst-bf93e3.netlify.app/",
  },
];

const Projects = () => {
  motion.div;
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center text-indigo-400 mb-16"
      >
        Projects
      </motion.h2>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor="#ffffff"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay - visible on mobile, hover on desktop */}
                <div
                  className="absolute inset-0 bg-black/40 
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 
                  transition-opacity duration-300 flex items-center justify-center gap-4"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-indigo-600 hover:bg-indigo-700 p-3 rounded-full text-lg transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-purple-600 hover:bg-purple-700 p-3 rounded-full text-lg transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-indigo-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-600/20 border border-indigo-400 rounded-full text-xs text-indigo-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
