import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$0 / month",
    tagline: "Perfect for individuals exploring SwiftTask.",
    features: [
      "Up to 50 tasks / month",
      "Basic AI suggestions",
      "Sync on 1 device",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$9 / month",
    tagline: "For busy professionals who want more power.",
    featured: true,
    features: [
      "Unlimited tasks",
      "Advanced AI scheduling",
      "Sync across all devices",
      "Email & chat support",
      "Custom categories",
    ],
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$29 / month",
    tagline: "Best for teams and organizations.",
    features: [
      "Unlimited tasks & projects",
      "AI team collaboration",
      "Dedicated account manager",
      "Custom integrations (API)",
      "24/7 priority support",
      "Advanced analytics",
    ],
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5">
    <path
      d="M7.5 11.5l-2-2-1.5 1.5 3.5 3.5 8-8-1.5-1.5-6.5 6.5z"
      fill="#0C2D48"
    />
  </svg>
);

export default function Pricing() {
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
          Choose Your Plan
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={
                p.featured
                  ? "rounded-2xl p-[2px] bg-gradient-to-br from-[#145DA0] to-[#2E8BC0] shadow-xl"
                  : "rounded-2xl border border-gray-200 shadow-sm"
              }
            >
              <div className="rounded-2xl bg-white p-8 h-full flex flex-col">
                {p.badge && (
                  <div className="self-start mb-4 text-xs font-semibold text-white bg-gradient-to-r from-[#2E8BC0] to-[#145DA0] px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-2xl font-spaceGrotesk font-bold text-[#0C2D48]">
                  {p.name}
                </h3>
                <p className="text-3xl mt-2 font-spaceGrotesk font-bold text-[#0C2D48]">
                  {p.price}
                </p>
                <p className="text-gray-600 mt-2 font-inter">{p.tagline}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-700">
                      <CheckIcon />
                      <span className="font-inter">{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#2E8BC0] to-[#145DA0] text-white font-semibold py-3 shadow-md"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
