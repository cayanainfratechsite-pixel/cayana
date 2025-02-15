"use client";

import React from "react";
import { motion } from "framer-motion";
import Underline from "../Underline";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Executive Director - Contracts & Projects",
    image: "/images/AboutPage/team1.webp",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CFO",
    image: "/images/AboutPage/team1.webp",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Project Head",
    image: "/images/AboutPage/team1.webp",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Project Head",
    image: "/images/AboutPage/team1.webp",
  },
  {
    id: 5,
    name: "Eva Wilson",
    role: "CTO",
    image: "/images/AboutPage/team1.webp",
  },
  {
    id: 6,
    name: "Frank Miller",
    role: "CFO",
    image: "/images/AboutPage/team1.webp",
  },
];

const TeamGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-center text-xl md:text-xl uppercase font-medium text-gray-900"
        >
          Our Leadership Team
        </motion.h2>
        <Underline />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: member.id * 0.2 }}
              className="border border-gray-300 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-contain p-3"
              />
              <div className="px-6 pb-6 text-start">
                <h3 className="text-xl font-medium text-gray-800">
                  {member.name}
                </h3>
                <p className="text-[#0553F1] font-normal">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
