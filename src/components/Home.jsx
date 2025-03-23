import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import profileImage from "../images/logos-circle.png"

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Web Developer",
          "Graphics Designer",
          "Video Editor",
          "Social Media Strategist",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-between px-6 md:px-30 py-36 space-y-12 md:space-y-0 md:flex-row-reverse"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% visible
    >
      {/* Profile Image (Top in Mobile, Right in Desktop) */}
      <motion.img
  src={profileImage}
  alt="Vaigai Vendhan"
  className="w-72 h-72 md:w-96 md:h-96 object-cover"
  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
/>

      {/* Left Content */}
      <motion.div
        className="max-w-lg text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          className="bg-yellow-500 text-white px-4 py-1 rounded-lg text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Vaigai Vendhan
        </motion.span>

        <h2 className="text-4xl font-bold mt-4 leading-tight">
          I'm <span className="text-teal-600 text-3xl"><span ref={el}></span></span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Passionate about crafting websites, designing graphics, editing videos, and managing social media.
        </p>

        {/* Buttons */}
        <motion.div
  className="mt-6 flex flex-row items-center justify-center md:justify-start space-x-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  <button
    onClick={() => (window.location.hash = "contact")}
    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-all hover:bg-purple-700"
  >
    Hire Me
  </button>

  <button
    onClick={() => window.open("https://drive.google.com/file/d/1DX-ayAOhP0gBc25zrLdzVeXlroTmJZej/view", "_blank")}
    className="px-6 py-3 rounded-lg font-medium bg-[#ededf2] cursor-pointer transition-all hover:bg-[#009689] hover:text-white flex items-center"
  >
    Download CV <span className="ml-2">📄</span>
  </button>
</motion.div>


        {/* Social Icons */}
        <motion.div
          className="mt-8 flex justify-center md:justify-start space-x-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://www.instagram.com/kv_creationsofficial_" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-all">
            <FaInstagram className="text-purple-600 text-xl" />
          </a>
          <a href="http://linkedin.com/in/vaigai-vendhan-9b142b258" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-all">
            <FaLinkedin className="text-blue-600 text-xl" />
          </a>
          <a href="mailto:vaigaivendhan138@gmail.com" className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-all">
            <FaEnvelope className="text-red-500 text-xl" />
          </a>
          <a href="https://github.com/vaigai138" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-all">
            <FaGithub className="text-gray-900 text-xl" />
          </a>
          <a href="https://leetcode.com/vaigai138" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 rounded-full p-3 shadow-md hover:shadow-lg transition-all">
            <FaCode className="text-orange-500 text-xl" />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
