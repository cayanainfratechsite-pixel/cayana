"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src="/images/AboutPage/2.webp"
          alt="Hero Image"
          width={1900}
          height={800}
          layout="responsive"
          className="w-full"
          quality={90}
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8 md:py-16 mt-20">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-medium text-lg uppercase sm:text-xl md:text-2xl lg:text-3xl "
          >
            Discover Our Story
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-1 max-w-2xl text-xs sm:text-lg md:text-xl"
          >
            Dive into our journey and learn more about our mission, values, and
            the inspiration behind everything we do.
          </motion.p>

          {/* Animated CTA Button */}
          {/* <motion.a
            href="#learn-more"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className=" mt-5 inline-block rounded-full bg-blue-600 px-2 py-1 sm:px-8 sm:py-3 text-xs sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn More
          </motion.a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
