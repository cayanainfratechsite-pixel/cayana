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
          className="flex flex-col md:flex-row items-center justify-center gap-12 mx-auto"
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
            &quot;Work is God&quot; - a philosophy that drives us to approach every task with dedication, integrity, and a commitment to excellence.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
            As we move forward, my vision is to make Cayana, a leader in the real estate industry delivering unparalleled value to our customers with hard work and ethical practices.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
            Our vision extends beyond the business success; My greatest motivation comes from seeing our people succeed-personally and professionally. By fostering a culture of continuous learning, growth, and empowerment, we ensure that every individual at Cayana reaches their fullest potential and touches extraordinary heights.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
            We Build, We Grow, on Your Trust.
            </p>
            <p className="text-zinc-900 text-lg leading-relaxed mb-6">
            Please Do Join Hands with Us!!
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/ceo.jpeg"
              alt="CMO Photo CAYANA"
              width={350}
              height={350}
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurLeadershipTeamCMO;
