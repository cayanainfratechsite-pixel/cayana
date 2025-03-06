"use client";

import React from "react";
import { motion } from "framer-motion";
import Underline from "../Underline";

const OurLeadershipTeam: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        >
          Message From CMD
        </motion.h2>

        <Underline/>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="w-full md:w-full"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
              A Message from Our CMD
            </h3>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
              Welcome to our journey of innovation and commitment. Our company
              has grown from humble beginnings into a trailblazer in the
              industry—thanks to the dedication and hard work of our
              exceptional team. As we continue to forge new paths and overcome
              challenges, our mission remains steadfast: to deliver excellence
              and create lasting value for our clients, partners, and
              community.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed">
              I am deeply honored to lead such an inspiring team that
              continuously pushes the boundaries of what’s possible. Together,
              we are building a future where innovation meets integrity, and
              every challenge is an opportunity for growth. Thank you for being
              part of our incredible journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLeadershipTeam;
