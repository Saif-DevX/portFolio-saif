import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tags, demo, github }) => {
  motion.div;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm text-indigo-300">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
