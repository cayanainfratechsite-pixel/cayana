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

        <Underline />

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
              At Cayana Infratech Pvt. Ltd., we believe in building more than
              just structures—we build trust, transparency, and lasting
              relationships. Since our inception, our focus has been on
              delivering high-quality developments that redefine modern living
              while maintaining the highest standards of integrity and
              innovation. Every project we undertake is a testament to our
              commitment to excellence, sustainability, and customer
              satisfaction.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed">
              As we continue to grow, our vision remains steadfast—to create
              world-class infrastructure that not only meets the needs of today
              but also shapes a better tomorrow. With a dedicated team and a
              passion for excellence, we strive to transform spaces into
              thriving communities, ensuring value and prosperity for
              generations to come.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLeadershipTeam;
