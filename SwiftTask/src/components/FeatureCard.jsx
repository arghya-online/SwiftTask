import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="p-[1px] rounded-2xl bg-gradient-to-br from-[#145DA0] to-[#2E8BC0]"
    >
      <div className="h-full rounded-2xl bg-white p-7 flex flex-col items-start">
        <motion.div
          whileTap={{ scale: 0.9, rotate: 8 }}
          className="mb-5 inline-flex items-center justify-center rounded-xl bg-[#E9F4FD] p-3 shadow-sm"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-spaceGrotesk font-bold text-[#0C2D48] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 font-inter leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
