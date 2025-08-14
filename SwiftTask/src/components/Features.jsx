import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Smart Task Creation",
    text:
      "Add tasks in plain language — like “Meeting with John tomorrow at 3pm” — and SwiftTask understands instantly.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="#2E8BC0" strokeWidth="1.8" />
        <path d="M8 3v4M16 3v4M7 11h10" stroke="#145DA0" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Scheduling",
    text:
      "Let SwiftTask automatically arrange your day for maximum productivity and focus.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#2E8BC0" strokeWidth="1.8" />
        <path d="M12 7v6l4 2" stroke="#145DA0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cross-Device Sync",
    text:
      "Access your tasks from mobile, desktop, or tablet with real-time synchronization.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M4 6h16v10H4z" fill="none" stroke="#2E8BC0" strokeWidth="1.8" />
        <path d="M8 20h8M10 16v4M14 16v4" stroke="#145DA0" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Instant Reminders",
    text:
      "Never miss a beat — get proactive, AI-tuned reminders exactly when you need them.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 3a7 7 0 0 1 7 7v3l1.2 2H3.8L5 13V10a7 7 0 0 1 7-7z" fill="none" stroke="#2E8BC0" strokeWidth="1.8" />
        <path d="M9 20h6" stroke="#145DA0" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

export default function Features() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-spaceGrotesk font-bold text-[#0C2D48] text-center mb-12"
        >
          Why Choose SwiftTask?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} text={f.text} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
