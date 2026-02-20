"use client";

import { motion } from "framer-motion";
import { Handshake, Lightbulb, TrendingUp, Trophy } from "lucide-react";

const reasons = [
  {
    icon: <Handshake className="w-6 h-6 text-blue-600" />,
    title: "Work That Matters",
    description:
      "Contribute to developments that shape evolving urban lifestyles and communities.",
    color: "bg-blue-50",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    title: "Real Responsibility",
    description:
      "Gain hands-on experience and the trust to make meaningful decisions from day one.",
    color: "bg-indigo-50",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    title: "Growth Environment",
    description:
      "Expand your capabilities through practical exposure and continuous learning opportunities.",
    color: "bg-emerald-50",
  },
  {
    icon: <Trophy className="w-6 h-6 text-amber-600" />,
    title: "Stability & Vision",
    description:
      "Be part of a company committed to long-term vision and quality-driven growth.",
    color: "bg-amber-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const WhyJoinCayana = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-100/50 rounded-full shadow-sm"
          >
            Opportunities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4"
          >
            Why Join{" "}
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering professionals to build the future of urban living through
            innovation, dedication, and excellence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(249, 250, 251, 1)",
                transition: { duration: 0.3 },
              }}
              className="group p-8 bg-zinc-50 border border-zinc-100 rounded-3xl transition-all duration-300 flex items-start space-x-6 shadow-sm hover:shadow-md"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 ${reason.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinCayana;
