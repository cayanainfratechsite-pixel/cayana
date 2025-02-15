"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src="/images/Blog/blog_bg.webp"
          alt="Hero Image"
          width={1900}
          height={800}
          layout="responsive"
          className="w-full"
          quality={90}
        />

        {/* Dark overlay over the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Black background container at the bottom of the image */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/60 
                        px-4 py-6 sm:px-8 sm:py-10 mx-auto max-w-7xl 
                        mb-4 lg:mb-10 rounded-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaQuoteLeft className="w-8 h-8 text-zinc-100 mb-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="m-1 font-serif mx-auto text-center text-xs sm:text-lg md:text-2xl text-zinc-100"
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
