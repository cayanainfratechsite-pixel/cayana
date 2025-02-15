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
          Cayana Infratech Pvt. Ltd., established in 2010, is a dynamic and
          dedicated company based in Bhubaneswar, Odisha. Specializing in real
          estate development and construction, Cayana has become a trusted name
          in the industry. We focus on building trust and creating relationships
          among our customers and associates.
        </p>
        <p className="text-lg md:text-lg text-zinc-900 mb-6">
          Cayana has been elevating excellence and redefining living spaces with
          innovation, trust, and preeminence. Driven by a vision to transform
          Odisha’s real estate landscape, we prioritize transparency, timely
          delivery, and world-class amenities.{" "}
        </p>
        <p className="text-lg md:text-lg text-zinc-900 mb-6">
        With each project, we architect more than just apartments. We create lifestyles, build trust, elevate businesses and give wings to your dreams. 
        </p>
      </motion.div>
    </div>
  );
};

export default ContentPage;
