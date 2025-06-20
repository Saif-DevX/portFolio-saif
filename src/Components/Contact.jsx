import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLocationArrow,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  motion.div;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 10000); // clear after 10 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_24t6179", 
        "template_o7j1ccu", 
        formData,
        "BIqV749Cp0afkxD7o" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setFormData({ name: "", email: "", message: "" });
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center text-indigo-400 mb-12"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-gray-300">
            I'd love to hear from you! Whether it's a project idea, collaboration, or just a chat — feel free to reach out.
          </p>

          <div className="space-y-4 text-sm text-indigo-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-indigo-500" />
              <a href="mailto:developersaif336@gmail.com" className="hover:underline">
                developersaif336@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaLocationArrow className="text-lg text-indigo-500" />
              Punjab, Pakistan
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-6 text-xl text-indigo-300">
            <a
              href="https://x.com/SaifDevX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Saif-DevX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/saif-ur-rehman-859056356/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-3 rounded bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold cursor-pointer"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm mt-2 text-center text-green-400">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
