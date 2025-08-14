// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import phonemockup from "../assets/phone-mockup.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.6 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-screen h-screen bg-[#0C2D48] overflow-hidden">
      {/* Wavy background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#145DA0"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,213.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256V320H0Z"
        ></path>
      </svg>

      {/* Content container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-6 md:px-20">
        {/* Left Text */}
        <motion.div
          className="max-w-lg text-white z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={fadeUp}
          >
            Boost Your Productivity with <span className="text-[#2E8BC0]">SwiftTask</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            variants={fadeUp}
          >
            Your AI-powered productivity partner that keeps you on track and ahead of deadlines.
          </motion.p>
          <motion.div className="flex gap-4" variants={fadeUp}>
            <button className="bg-[#2E8BC0] px-6 py-3 rounded-lg font-semibold hover:bg-[#145DA0] transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0C2D48] transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <motion.div
          className="relative flex gap-6 mt-10 md:mt-0"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="phonemockup"
            alt="Phone mockup 1"
            className="rounded-3xl shadow-2xl transform rotate-[-6deg]"
            whileHover={{ rotate: -4, scale: 1.05 }}
          />
          <motion.img
            src="https://via.placeholder.com/250x500"
            alt="Phone mockup 2"
            className="rounded-3xl shadow-2xl transform rotate-[6deg]"
            whileHover={{ rotate: 4, scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
