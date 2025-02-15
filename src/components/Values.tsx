// components/Values.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ValueCardProps {
  image: string;
  message: string;
}

const cardData: ValueCardProps[] = [
  {
    image: "/images/value1.webp",
    message: "One of the trusted name in the real estate industries in Bhubaneswar with over 10 years of experience in building landmark in residential and commercial properties.",
  },
  {
    image: "/images/value2.webp",
    message: "Dedicated research team to keep in sync with the recent technologies & trends in the real estate world, making sure new age living solutions for our customers. ",
  },
  {
    image: "/images/value3.webp",
    message: "We are committed to excellence in the services. We achieve the highest quality of service delivery by attracting, developing and retaining the best professional.",
  },
  {
    image: "/images/value4.webp",
    message: "We are committed to excellence in the services. We achieve the highest quality of service delivery by attracting, developing and retaining the best professional.",
  },
];

const ValueCard: React.FC<ValueCardProps> = ({ image, message }) => {
  return (
    <div className="flex flex-col items-center ">
      <motion.div
        className="relative w-[220px] h-[310px] sm:w-[250px] sm:h-[350px] md:w-[170px] md:h-[300px] lg:w-[210px] lg:h-[360px] xl:w-[280px] xl:h-[410px] overflow-hidden cursor-pointer border border-zinc-400 p-4"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.img
          src={image}
          className="w-full h-full object-cover rounded-sm"
          variants={{
            rest: { filter: "blur(0px)", scale: 1 },
            hover: { filter: "blur(15px)", scale: 1.05 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-zinc-900 text-lg font-semibold text-center">
            {message}
          </p>
        </motion.div>
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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          // Pause slider on hover or touch, resume when the interaction ends.
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <ValueCard
            image={cardData[currentIndex].image}
            title={cardData[currentIndex].title}
            message={cardData[currentIndex].message}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Values: React.FC = () => {
  return (
    <section className="py-16 mb-20 bg-zinc-100">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black inline-block relative">
          Pillars of Excellence
            {/* Underline */}
            <span className="block h-[1px] w-[15rem] bg-zinc-900 mx-auto mt-2 rounded-2xl"></span>
          </h2>
          {/* Two lines of descriptive text */}
          <p className="mt-4 text-gray-600">
          We create spaces that enable Everyday Joys; <br />
          one community, one family, one home, and one holiday home at a time.
          </p>
        </div>

        {/* Mobile Slider: Visible on screens below 768px */}
        <div className="block md:hidden mb-8">
          <MobileSlider />
        </div>

        {/* Cards Grid: Visible on screens 768px and above */}
        <div className="hidden  md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-center">
          {cardData.map((card, index) => (
            <ValueCard
              key={index}
              image={card.image}
              title={card.title}
              message={card.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
