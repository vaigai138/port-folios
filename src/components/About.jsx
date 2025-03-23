import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiTailwindcss, SiAdobe, SiFigma, SiCanva, SiAdobepremierepro, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";

const skillNames = {
  SiReact: "React",
  SiNodedotjs: "Node.js",
  SiMongodb: "MongoDB",
  SiHtml5: "HTML5",
  SiCss3: "CSS3",
  SiJavascript: "JavaScript",
  SiTailwindcss: "Tailwind CSS",
  SiAdobe: "Adobe",
  SiFigma: "Figma",
  SiCanva: "Canva",
  SiAdobepremierepro: "Premiere Pro",
  SiAdobephotoshop: "Photoshop",
  SiAdobeillustrator: "Illustrator",
  SiAdobeaftereffects: "After Effects",
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-[#ededf2] text-black w-full">
      <div className="max-w-7xl mx-auto text-center mb-10">
        {/* Title with Fade-in Animation */}
        <motion.h1
          className="text-4xl font-bold text-[#009689] mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          About Me
        </motion.h1>

        {/* Paragraph with Smooth Fade-in */}
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I am a passionate full-stack developer, UI/UX designer, and video editor, dedicated to creating seamless user experiences and digital content. I constantly explore new technologies and design trends to enhance my skill set and deliver high-quality work.
        </motion.p>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-[#009689] font-bold text-center mb-8">My Skills</h2>

        {/* Web Development */}
        <motion.div className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[#dc3545] mb-4">Web Development</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTailwindcss].map((Icon, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Icon className="text-4xl text-[#dc3545] mb-2" />
                <p className="text-gray-700">{skillNames[Icon.name]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* UI/UX & Graphics Design */}
        <motion.div className="mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[#007bff] mb-4">UI/UX & Graphics Design</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[SiAdobe, SiFigma, SiCanva, SiAdobephotoshop, SiAdobeillustrator].map((Icon, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Icon className="text-4xl text-[#007bff] mb-2" />
                <p className="text-gray-700">{skillNames[Icon.name]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Editing & Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-[#000058] mb-4">Video Editing & Social Media</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[SiAdobepremierepro, SiAdobeaftereffects].map((Icon, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Icon className="text-4xl text-[#000058] mb-2" />
                <p className="text-gray-700">{skillNames[Icon.name]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
