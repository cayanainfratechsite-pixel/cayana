// components/Values.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Underline from "./Underline";

interface ValueCardProps {
  image: string;
}

const cardData: ValueCardProps[] = [
  { image: "/images/value1.jpeg" },
  { image: "/images/value3.webp" },
  { image: "/images/value2.webp" },
  { image: "/images/value4.webp" },
];

const ValueCard: React.FC<ValueCardProps> = ({ image }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative w-[350px] h-[480px] sm:w-[250px] sm:h-[350px] md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[380px] xl:w-[310px] xl:h-[440px] overflow-hidden  p-4"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.img
          src={image}
          className="w-full h-full object-cover rounded-sm"
        />
      </motion.div>
    </div>
  );
};

const MobileSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cardData.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  return (
    <div className="flex justify-center">
      {/* Fixed container to isolate slider animation */}
      <div
        className="relative overflow-hidden"
        style={{ width: "350px", height: "480px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0" 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <ValueCard image={cardData[currentIndex].image} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Values: React.FC = () => {
  return (
    <section className="py-16 mb-20 bg-zinc-100">
      <div className="mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
            Pillars of Excellence
            <Underline />
          </h2>
          <p className="text-zinc-900">
            We create spaces that enable Everyday Joys; <br />
            one community, one family, one home, and one holiday home at a time.
          </p>
        </div>

        {/* Mobile Slider: Visible on screens below 768px */}
        <div className="block md:hidden mb-8">
          <MobileSlider />
        </div>

        {/* Cards Grid: Visible on screens 768px and above */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-1 justify-center">
          {cardData.map((card, index) => (
            <ValueCard key={index} image={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
