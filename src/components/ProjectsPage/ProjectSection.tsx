// components/ProjectSection.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Underline from "../Underline";

interface Facility {
  name: string;
  image: string;
}

const facilities: Facility[] = [
  { name: "SPA", image: "/images/Projects/pjcmp1.webp" },
  { name: "Swimming Pool", image: "/images/Projects/pjcmp1.webp" },
  { name: "Clubhouse", image: "/images/Projects/pjcmp1.webp" },
  { name: "Yoga Deck", image: "/images/Projects/pjcmp1.webp" },
];

// Extra facility that isn’t represented by an image
const extraFacility = "Cafeteria";

const ProjectSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase">
            Amenities
          </h1>
          <Underline />
          <p className="text-zinc-900">
            Set against a landscape that mirrors the river’s timeless journey,
            every space reflects the evolving richness of your dreams and
            values. Discover the epitome of serene living, where nature’s beauty
            flows seamlessly into the heart of your home. Each corner is
            thoughtfully designed to reflect your passions, shape your
            aspirations, and tell a story as unique as you. Here, the energy of
            city life and the serenity of nature coexist in perfect harmony,
            creating an experience as distinct and refined as your own journey.
          </p>
        </motion.div>

        {/* Facilities Images Grid */}
        <div className="grid grid-cols-4 gap-2">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center justify-center text-center"
            >
              <Image
                src={facility.image}
                alt={facility.name}
                width={600}
                height={400}
                className="object-contain w-auto h-16 sm:h-20 md:h-24"
              />
              <h3 className="text-xs sm:text-sm px-4 py-2 border border-zinc-500 rounded-full text-zinc-900 mt-5">
                {facility.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
