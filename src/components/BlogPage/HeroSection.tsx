"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const heroImage = isMobile
    ? "/images/Blog/blog_bg_mobile.png"
    : "/images/Blog/blog_bg.webp";

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

        {/* Dark overlay over the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Black background container at the bottom of the image */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/60 
                        px-4 py-1 md:px-8 md:py-5  mx-2 md:mx-10 lg:mx-28 
                        mb-2 md:mb-5 rounded-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaQuoteLeft className=" w-5 h-5 md:w-5 md:h-5 lg:w-8 lg:h-8 text-zinc-100 md:mb-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="m-1 font-serif mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-100"
          >
            Explore insights, innovations, and stories that shape our industry and inspire progress.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
