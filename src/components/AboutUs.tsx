"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

// Fade-in animation
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stagger container animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Animated Number Component (animates only once per page load)
const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  // Remove 'once: true' from useInView so we can control re-animation manually
  const inView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = React.useState(0);
  // Flag to ensure the animation starts only once
  const hasAnimated = React.useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      controls.start({
        count: value,
        transition: { duration: 2, ease: "easeOut" },
      });
      hasAnimated.current = true;
    }
  }, [inView, value, controls]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      className="text-xl sm:text-3xl lg:text-3xl font-bold text-black"
      onUpdate={(latest) => {
        // latest.count is available only after the animation starts
        if (latest.count !== undefined) {
          setCount(Math.floor(latest.count));
        }
      }}
    >
      {count}+
    </motion.span>
  );
};

const Values: React.FC = () => {
  return (
    <section className="bg-zinc-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: About CAYANA */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              About CAYANA
            </h2>
            <div className="flex gap-3">
              <div className="border-r border-black text-black"></div>
              <div>
                <p className="text-black italic text-">
                Where Dreams Take Shape, and Trust is Built
                </p>
              </div>
            </div>
            <p className="text-black text-base sm:text-lg leading-relaxed">
            Founded in 2010 and based in Bhubaneswar, Odisha, Cayana Infratech Pvt. Ltd. is a trusted name in real estate development and construction. With a commitment to transparency, timely delivery, and world-class amenities, we redefine living spaces with innovation and trust.
            </p>
            <p className="text-black text-base sm:text-lg leading-relaxed">
            Beyond building apartments, we create lifestyles, foster trust, and elevate businesses—turning dreams into reality
            </p>
          </motion.div>

          {/* Right Side: Statistics Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6 border-l border-zinc-500"
          >
            {[
              { title: "Years of Excellence", value: 25 },
              { title: "Projects Completed", value: 100 },
              { title: "Delivered Projects", value: 130 },
              { title: "Satisfied Clients", value: 90 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="p-6 ml-6 text-start flex flex-col justify-start"
              >
                <AnimatedNumber value={stat.value} />
                <h3 className="text-sm sm:text-base md:text-base font-semibold text-black mb-2">
                  {stat.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        
      </div>

       {/* "About Us" button */}
       <div className="flex justify-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-transparent border border-zinc-900 text-zinc-900 
                   px-8 py-2 rounded-sm font-semibold flex items-center gap-2 
                   transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
          >
            About Us
          </motion.button>
        </div>
    </section>
  );
};

export default Values;
