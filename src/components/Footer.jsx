import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="text-2xl font-bold text-[#009689]">Vaigai Vendhan</div>
      
      {/* Navigation Links */}
      <div className="flex justify-center space-x-6 mt-4 text-gray-400">
        <a href="#home" className="hover:text-[#009689] transition">Home</a>
        <a href="#about" className="hover:text-[#009689] transition">About</a>
        <a href="#projects" className="hover:text-[#009689] transition">Projects</a>
        <a href="#contact" className="hover:text-[#009689] transition">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.instagram.com/kv_creationsofficial_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-[#009689] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="http://linkedin.com/in/vaigai-vendhan-9b142b258"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-[#009689] transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Vaigai Vendhan - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
