import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Freelancer",
    quote:
      "SwiftTask completely changed how I work! It’s like having a personal assistant in my pocket.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    quote:
      "Finally, an AI assistant that actually helps me save time instead of wasting it.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Miller",
    role: "Student",
    quote:
      "I can’t imagine going back to sticky notes and endless lists.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-spaceGrotesk font-bold text-[#0C2D48] text-center mb-12"
        >
          Loved by Productivity Enthusiasts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white shadow-md p-8 border border-gray-100"
            >
              <motion.img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-[#2E8BC0]"
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
              />
              <blockquote className="italic text-gray-700 text-center leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-center mt-5">
                <div className="font-spaceGrotesk font-bold text-[#0C2D48]">
                  {t.name}
                </div>
                <div className="text-sm text-[#145DA0] font-medium">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
