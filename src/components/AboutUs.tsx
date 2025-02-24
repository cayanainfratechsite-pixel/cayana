"use client";

import React from "react";
import { motion } from "framer-motion";

const Values: React.FC = () => {
  // Simulated growth data for the last 15 years
  const growthData = [
    { year: "2010", value: 20 },
    { year: "2011", value: 15 },
    { year: "2012", value: 30 },
    { year: "2013", value: 25 },
    { year: "2014", value: 55 },
    { year: "2015", value: 50 },
    { year: "2016", value: 60 },
    { year: "2017", value: 78 },
    { year: "2018", value: 75 },
    { year: "2019", value: 85 },
    { year: "2020", value: 75 },
    { year: "2021", value: 80 },
    { year: "2022", value: 100 },
    { year: "2023", value: 115 },
    { year: "2024", value: 130 },
  ];

  // Determine the maximum value for scaling the bar heights
  const maxValue = Math.max(...growthData.map((item) => item.value));

  return (
    <motion.section
      className="bg-zinc-100 py-20"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Left Side: About CAYANA */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
              THE CAYANA journey
            </h2>
            <div className="flex gap-3">
              <div className="border-r border-black"></div>
              <div>
                <p className="text-black italic">
                  Where Dreams Take Shape, and Trust is Built
                </p>
              </div>
            </div>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Founded in 2010 and based in Bhubaneswar, Odisha, Cayana Infratech
              Pvt. Ltd. is a trusted name in real estate development and
              construction. With a commitment to transparency, timely delivery,
              and world-class amenities, we redefine living spaces with
              innovation and trust.
            </p>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Beyond building apartments, we create lifestyles, foster trust,
              and elevate businesses—turning dreams into reality.
            </p>
          </div>

          {/* Right Side: Animated Bar Graph for Company Growth */}
          <div className="px-4">
            {/* Use flex container so that all bars share the available width */}
            <div className="flex justify-center space-x-1 md:space-x-4">
              {growthData.map((data, index) => {
                const heightPercentage = (data.value / maxValue) * 100;
                return (
                  <div
                    key={data.year}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="relative h-48 md:h-64 w-[10] sm:w-full flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercentage}%` }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-zinc-900 w-full"
                      />
                    </div>
                    <span className="text-[7px] sm:text-xs text-zinc-900 mt-2">
                      {data.year}
                    </span>
                  </div>
                );
              })}
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-center text-zinc-900 uppercase mt-6">
              Company Growth - Last 15 Years
            </h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Values;
