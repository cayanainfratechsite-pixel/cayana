"use client";

import React from "react";
import { motion } from "framer-motion";
import Underline from "./Underline";

const AboutUs: React.FC = () => {
  return (
    <motion.section
      className="bg-zinc-100 py-20 flex items-center justify-center"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
                THE CAYANA JOURNEY
                <Underline />
              </h2>
              <p className="text-zinc-900">
                Where Dreams Take Shape and Trust Is Built.
              </p>
            </div>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Founded in 2010 and based in Bhubaneswar, Odisha, Cayana Infratech 
              Pvt. Ltd. is a trusted name in real estate development and 
              construction. With a commitment to transparency, timely delivery, 
              and world-class amenities, we redefine living spaces with 
              innovation and trust.
            </p>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              Beyond building apartments, we create lifestyles, foster trust, 
              and elevate businesses—turning dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
