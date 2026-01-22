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
              At Cayana Infratech, our foundation is built on integrity, ethics, and a commitment to sustainability. Since our inception, we have remained dedicated to delivering projects that not only meet the highest standards of quality but also reflect our responsibility toward the environment and the communities we serve.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
              I firmly believe that success is measured not just by what we build, but by the positive impact we leave behind. Our approach blends transparency, trust, and innovation with a deep respect for nature.
            </p>

            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
              Together, let us shape a future where progress and sustainability go hand in hand.
            </p>
            
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
              Thank you for trusting us on this journey.
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLeadershipTeam;
