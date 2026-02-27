"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Underline from "../Underline";

const CorporateEthics: React.FC = () => {
  // Variants for staggered text animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        >
          Corporate Ethics
        </motion.h2>

        <Underline />

        {/* Content Container with Staggered Animations */}
        <motion.div
          className="space-y-8 text-lg text-zinc-900"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={itemVariants} className="flex items-start">
            <span className="mr-2 text-[#0553F1] mt-1">
              <FaArrowRight />
            </span>
            <span>
              Our corporate ethics serve as the foundation of every project we
              undertake, ensuring that our business practices align with
              integrity, innovation, and responsibility.
            </span>
          </motion.p>
          <motion.p variants={itemVariants} className="flex items-start">
            <span className="mr-2 text-[#0553F1] mt-1">
              <FaArrowRight />
            </span>
            <span>
              We uphold the highest ethical standards in every transaction, ensuring
              trust with clients, partners, and stakeholders.
            </span>
          </motion.p>
          <motion.p variants={itemVariants} className="flex items-start">
            <span className="mr-2 text-[#0553F1] mt-1">
              <FaArrowRight />
            </span>
            <span>
              With a customer-first philosophy, we listen, innovate, and deliver
              tailored solutions that transform their dreams into reality.
            </span>
          </motion.p>
          <motion.p variants={itemVariants} className="flex items-start">
            <span className="mr-2 text-[#0553F1] mt-1">
              <FaArrowRight />
            </span>
            <span>
              We believe in growth that benefits both people and the planet. Our
              projects integrate eco-friendly designs, sustainable materials,
              and energy-efficient solutions to create a greener tomorrow.
            </span>
          </motion.p>
          <motion.p variants={itemVariants} className="flex items-start">
            <span className="mr-2 text-[#0553F1] mt-1">
              <FaArrowRight />
            </span>
            <span>
              Success is not just about numbers—it’s about impact. Every project
              we undertake is a step toward a better, more connected, and more
              progressive world.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateEthics;
