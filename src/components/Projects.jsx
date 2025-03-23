import React from "react";
import { motion } from "framer-motion";
import proj1 from "./proj1.png";
import proj2 from "./proj2.png";
import proj3 from "./proj3.png";
import proj4 from "./proj4.png";

const projects = [
  {
    title: "KV Media Works Website",
    category: "Media & Production",
    link: "https://kvmediaworks.me/",
    image: proj1
  },
  {
    title: "Kadambam Real Estate",
    category: "Real Estate Platform",
    link: "https://kadambamsample.netlify.app/",
    image: proj2
  },
  {
    title: "Homeyz Real Estate",
    category: "Property Listing Platform",
    link: "https://homyz-react.netlify.app/",
    image: proj3
  },
  {
    title: "Cookit IT Company Website",
    category: "Technology & IT Services",
    link: "https://cookit-82lj.onrender.com/",
    image: proj4
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-teal-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-2 p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative object-cover w-full aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-6 left-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a
            href="https://github.com/vaigai138"
            className="text-2xl font-bold text-teal-600 hover:text-teal-500 transition"
          >
            View All Projects →
          </a>
        </motion.div>

        {/* Creative Video Edits Section */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="p-6 md:p-10 bg-gray-100 rounded-lg shadow-lg inline-block w-full max-w-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Creative Video Edits</h3>
            <p className="text-lg text-gray-700 mt-2">Check out my latest video editing projects</p>
            <a
              href="https://kvmediaworks.me/works"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              View Video Edits →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
