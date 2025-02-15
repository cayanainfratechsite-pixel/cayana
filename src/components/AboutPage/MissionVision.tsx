"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaShieldAlt,
  FaHandshake,
  FaEye,
  FaBullseye,
  FaRocket,
  FaLaugh,
} from "react-icons/fa";
import Underline from "../Underline";

const MissionVision: React.FC = () => {
  // Parallax effects for background decorations
  const { scrollY } = useScroll();
  const parallaxUp = useTransform(scrollY, [0, 300], [0, -50]);
  const parallaxDown = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        >
          Our Company Mission & Vision
        </motion.h2>

        <Underline />

        {/* Vertical Stack of Sections */}
        <div className="space-y-12">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: -25 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mb-4"
            >
              <FaBullseye className="text-5xl text-[#0553F1]" />
            </motion.div>
            <h4 className="text-xl font-medium uppercase text-gray-800 mb-2">
              Our Mission
            </h4>
            <p className="text-zinc-900 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              We deliver exceptional real estate services that exceed
              expectations, nurturing long-term relationships built on trust,
              integrity, and expertise—all while making the process fun and
              engaging.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: 25 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mb-4"
            >
              <FaEye className="text-5xl text-[#0553F1]" />
            </motion.div>
            <h4 className="text-xl font-medium uppercase text-gray-800 mb-2">
              Our Vision
            </h4>
            <p className="text-zinc-900 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              To lead the real estate landscape in Odisha by pioneering quality,
              innovation, and customer delight. We envision a future where every
              interaction creates lasting value.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 mt-12">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        >
          Our Company Core Values
        </motion.h2>

        <Underline />

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mb-4"
            >
              <FaShieldAlt className="text-5xl text-[#0553F1]" />
            </motion.div>
            <h4 className="text-xl font-medium uppercase text-gray-800 mb-2">
              Integrity
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We uphold the highest standards of integrity in all our actions.
              Our team collaborates to deliver the best, most honest solutions.
            </p>
          </motion.div>

          {/* Transparency & Trust */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.3, rotate: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mb-4"
            >
              <FaHandshake className="text-5xl text-[#0553F1]" />
            </motion.div>
            <h4 className="text-xl font-medium uppercase text-gray-800 mb-2">
              Transparency & Trust
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Our transparent approach builds trust, ensuring every interaction
              is honest and straightforward.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
