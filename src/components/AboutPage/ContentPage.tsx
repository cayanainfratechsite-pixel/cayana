"use client";
import Underline from "../Underline";
import { motion } from "framer-motion";

const ContentPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Animated Heading with Underline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase relative inline-block">
          About Us
        </h2>
      </motion.div>
      <Underline />


      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 max-w-7xl mx-auto text-center"
      >
        <p className="text-lg md:text-lg text-zinc-900 mb-6">
          Cayana- A Story of Hard Work, Perseverance & Ambition.
        </p>
        <p className="text-lg md:text-lg text-zinc-900 mb-6">
        Cayana Infratech Pvt Ltd, a name synonymous with trust, innovation, and excellence in the real estate industry. Established in 2010, we embarked on a journey to redefine the landscape of real estate. Over the years, we have grown and evolved, consistently setting new benchmarks in quality, customer satisfaction, and business integrity.
        </p>
        <p className="text-lg md:text-lg text-zinc-900 mb-6">
        Cayana Infratech Pvt Ltd, a name synonymous with trust, innovation, and excellence in the real estate industry. Established in 2010, we embarked on a journey to redefine the landscape of real estate. Over the years, we have grown and evolved, consistently setting new benchmarks in quality, customer satisfaction, and business integrity.
        </p>
      </motion.div>
    </div>
  );
};

export default ContentPage;
