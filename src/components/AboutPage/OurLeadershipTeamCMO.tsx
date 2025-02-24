"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Underline from "../Underline";

const OurLeadershipTeamCMO: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center text-lg sm:text-xl md:text-2xl font-medium uppercase text-zinc-900"
        >
          Message From CEO
        </motion.h2>

        <Underline />

        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          {/* CMO Message (Left Side) */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
              A Message from Our CEO
            </h3>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
              As the Chief Marketing Officer, I am honored to drive our brand's
              vision and connect with our audience in meaningful ways. Marketing
              is not just about promotions; it’s about creating experiences that
              resonate and inspire. Our team is dedicated to storytelling,
              innovation, and pushing creative boundaries to build a lasting
              impact.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed">
              Our journey is built on passion, collaboration, and a commitment
              to excellence. I am excited to continue leading initiatives that
              redefine industry standards and bring value to our community. 
              Thank you for being part of this exciting chapter.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/as.jpg" 
              alt="CMO Photo CAYANA"
              width={500} 
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLeadershipTeamCMO;
