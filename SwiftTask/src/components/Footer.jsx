// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const linkHover = {
    initial: { color: "#fff" },
    hover: {
      backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: { duration: 0.3 }
    }
  };

  const socialHover = {
    initial: { scale: 1, color: "#fff" },
    hover: {
      scale: 1.15,
      backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="bg-[#0C2D48] text-white px-6 py-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-700 pb-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">SwiftTask</h2>
          <p className="text-gray-300 mt-2 max-w-xs">
            Your AI Productivity Partner
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          {["Features", "Pricing", "Privacy Policy", "Contact"].map((link, i) => (
            <motion.a
              key={i}
              href="#"
              variants={linkHover}
              initial="initial"
              whileHover="hover"
              className="text-sm tracking-wide"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              variants={socialHover}
              initial="initial"
              whileHover="hover"
              className="text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-6 text-center text-gray-400 text-sm">
        © 2025 SwiftTask. All rights reserved.
      </div>
    </footer>
  );
}
