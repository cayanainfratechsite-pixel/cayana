"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any,
    },
  },
};

const LifeAtCayana = () => {
  return (
    <section className="py-24 bg-blue-200/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Reverted Original Heading Style */}
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 mb-3 text-sm md:text-base font-medium tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100/50 rounded-full"
          >
            Our Community
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase mb-4"
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
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />
        </div>

        {/* Screenshot-Inspired Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-3 md:gap-4"
        >
          {/* Block 1: Left Stack (Cols 1-3) */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3 md:gap-4">
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-sm overflow-hidden shadow-sm group"
            >
              <Image
                src="/images/DSC_9697.JPG (1).jpeg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-sm overflow-hidden shadow-sm group"
            >
              <Image
                src="/images/ed629296-76c4-48a4-9304-d3777b1bfbc2.jpg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Block 2: Middle (Cols 4-6) */}
          <motion.div variants={itemVariants} className="col-span-12 md:col-span-3 h-full">
            <div className="relative h-full aspect-video md:aspect-auto rounded-sm overflow-hidden shadow-sm group">
              <Image
                src="/images/DSC_9374.JPG (2).jpeg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Block 3: Big Group Photo (Cols 7-12) */}
          <motion.div variants={itemVariants} className="col-span-12 md:col-span-6 h-full">
            <div className="relative h-full aspect-video md:aspect-auto rounded-sm overflow-hidden shadow-sm group">
              <Image
                src="/images/DSC_9944.JPG.jpg.jpeg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Block 4: Bottom Row Left (Cols 1-6) */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-6"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-sm group">
              <Image
                src="/images/73e92b2c-a781-4b32-8acb-56bddec78a55.jpg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Block 5: Bottom Row Right (Cols 7-12) */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-6"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-sm group">
              <Image
                src="/images/2a90011b-aea7-412d-b1ac-600e2bd97931.jpg"
                alt="Culture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <FaQuoteLeft className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#0061ff', opacity: 0.4 }} />
          </motion.div>

          <p
            className="font-serif text-lg sm:text-xl md:text-2xl italic text-center leading-relaxed text-transparent bg-clip-text uppercase tracking-wider"
            style={{ backgroundImage: 'linear-gradient(to right, #60efff, #0061ff)' }}
          >
            "DRIVEN BY PEOPLE. DEFINED BY CULTURE"
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="h-1 mt-6 rounded-full"
            style={{
              backgroundImage: 'linear-gradient(to right, #60efff, #0061ff)',
              opacity: 0.3
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LifeAtCayana;
