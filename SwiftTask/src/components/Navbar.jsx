import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Companylogo from "../assets/Companylogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0C2D48] shadow-lg font-inter">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src={Companylogo}
                alt="Company logo"
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-white text-lg">
            {navLinks.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#2E8BC0] after:to-[#145DA0] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/get-started"
                className="bg-gradient-to-r from-[#2E8BC0] to-[#145DA0] text-white font-bold px-5 py-2 rounded-full shadow-md transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="md:hidden flex items-center text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0C2D48] px-4 pb-4 space-y-3 text-white font-medium text-lg"
          >
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-600 pb-2 hover:text-[#2E8BC0] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="block text-center bg-gradient-to-r from-[#2E8BC0] to-[#145DA0] text-white font-bold px-5 py-2 rounded-full shadow-md transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
