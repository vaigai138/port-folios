import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUser, FaEnvelope, FaComment, FaLaptopCode, FaLinkedin, FaInstagram, FaGithub, FaCode } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", purpose: "" });

  const formRef = useRef(null);
  const textRef = useRef(null);
  const formInView = useInView(formRef, { triggerOnce: false, margin: "-100px 0px" });
  const textInView = useInView(textRef, { triggerOnce: false, margin: "-100px 0px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    const { name, email, message, purpose } = formData;
    if (!name || !email || !purpose) {
      alert("Please fill in your name, email, and purpose of contact.");
      return;
    }
    const mailtoLink = `mailto:vaigaivendhan138@gmail.com?subject=${encodeURIComponent(
      `Contact for ${purpose}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPurpose: ${purpose}\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Form - Scrolls Up & Down */}
        <motion.div
          ref={formRef}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mx-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={formInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-4 bg-gray-50">
            <FaUser className="text-teal-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-transparent outline-none border-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-4 bg-gray-50">
            <FaEnvelope className="text-teal-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 bg-transparent outline-none border-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 mb-4 bg-gray-50">
            <FaLaptopCode className="text-teal-500" />
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-3 bg-transparent outline-none border-none"
            >
              <option value="" disabled>Select Purpose</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Web Development">Web Development</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="flex items-start border border-gray-300 rounded-lg px-3 mb-4 bg-gray-50">
            <FaComment className="text-teal-500 mt-3" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 bg-transparent outline-none border-none"
              rows="4"
            ></textarea>
          </div>
          <motion.button
            onClick={sendEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition cursor-pointer"
          >
            <FiSend className="mr-2" /> Send Message
          </motion.button>
        </motion.div>

        {/* Right Section - Scrolls Up & Down */}
        <motion.div
          ref={textRef}
          className="text-center md:text-left"
          initial={{ y: -100, opacity: 0 }}
          animate={textInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Let's Work Together</h2>
          <p className="text-gray-600 mt-4">
            Have a project in mind? Whether it's a website, a video edit, or both – let's collaborate and bring your ideas to life.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {[
              { icon: <FaLinkedin />, link: "http://linkedin.com/in/vaigai-vendhan-9b142b258" },
              { icon: <FaInstagram />, link: "https://instagram.com/kv_creationsofficial_" },
              { icon: <FaGithub />, link: "https://github.com/vaigai138" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="text-gray-600 hover:text-teal-600 text-2xl"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                viewport={{ once: false }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-gray-600 font-semibold">📍 Location:</p>
            <p className="text-gray-700">Coimbatore, India</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
