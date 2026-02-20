"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const LifeAtCayana = () => {
  return (
    <section className="py-20 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-100/50 rounded-full shadow-sm"
          >
            Our Community
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4"
          >
            Life at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Cayana
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />
        </div>

        {/* Improved Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative col-span-2 row-span-2 h-[350px] md:h-[500px] group overflow-hidden rounded-[2rem] shadow-lg"
          >
            <Image
              src="/images/DSC_9697.JPG (1).jpeg"
              alt="Team at Cayana"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative col-span-2 h-[170px] md:h-[240px] group overflow-hidden rounded-[2rem] shadow-lg"
          >
            <Image
              src="/images/ed629296-76c4-48a4-9304-d3777b1bfbc2.jpg"
              alt="Work Culture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Middle Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[170px] md:h-[235px] group overflow-hidden rounded-[2rem] shadow-lg"
          >
            <Image
              src="/images/DSC_9374.JPG (2).jpeg"
              alt="Team Collaboration"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-[170px] md:h-[235px] group overflow-hidden rounded-[2rem] shadow-lg"
          >
            <Image
              src="/images/2a90011b-aea7-412d-b1ac-600e2bd97931.jpg"
              alt="Team Spirit"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative col-span-2 h-[200px] md:h-[300px] group overflow-hidden rounded-[2rem] shadow-lg"
          >
            <Image
              src="/images/60d68854-6605-4af4-96ec-ad6537891ed0.jpg"
              alt="Team Events"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative col-span-2 h-[200px] md:h-[300px] group overflow-hidden rounded-[2rem] shadow-lg"
          >
            <Image
              src="/images/73e92b2c-a781-4b32-8acb-56bddec78a55.jpg"
              alt="Office Environment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Premium Tagline Overlay */}
          <div className="absolute inset-x-0 bottom-4 md:bottom-10 flex justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/70 backdrop-blur-md px-8 py-5 rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center gap-4 max-w-2xl border border-white/10"
            >
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-400 flex-shrink-0" />
              <p className="text-zinc-100 text-sm md:text-xl font-medium tracking-tight leading-tight text-center md:text-left">
                Driven by People. Defined by Culture.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtCayana;
