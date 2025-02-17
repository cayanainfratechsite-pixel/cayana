"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const heroImage = isMobile
    ? "/images/AboutPage/AboutP.png"
    : "/images/AboutPage/2.webp";

  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src={heroImage}
          alt="Hero Image"
          width={isMobile ? 800 : 1900}
          height={isMobile ? 1200 : 800}
          layout="responsive"
          className="w-full"
          quality={90}
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8 md:py-16 mt-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-medium text-lg uppercase sm:text-xl md:text-2xl lg:text-3xl "
          >
            Discover Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-1 max-w-2xl text-xs sm:text-lg md:text-xl"
          >
            Dive into our journey and learn more about our mission, values, and
            the inspiration behind everything we do.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
