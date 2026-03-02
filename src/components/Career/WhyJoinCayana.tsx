"use client";

import { motion, Variants } from "framer-motion";
import { Handshake, Lightbulb, TrendingUp, Trophy, Award } from "lucide-react";

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
  {
    icon: <Award className="w-6 h-6 text-orange-600" />,
    title: "Rewards & Recognition",
    description:
      "We recognise excellence and value contribution. At Cayana, performance and merit remain the foundation for acknowledgment and career growth.",
    color: "bg-orange-50",
  },
];

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

const WhyJoinCayana = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 mb-3 text-sm md:text-base font-medium tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100/50 rounded-full"
          >
            Opportunities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase mb-4"
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
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-center"
        >
          {reasons.slice(0, 4).map((reason, index) => (
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
                <h3 className="text-xl font-medium text-zinc-900 uppercase mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Centered 5th Item */}
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(249, 250, 251, 1)",
                transition: { duration: 0.3 },
              }}
              className="group p-8 bg-zinc-50 border border-zinc-100 rounded-3xl transition-all duration-300 flex items-start space-x-6 shadow-sm hover:shadow-md w-full md:max-w-[70%] lg:max-w-[65%]"
            >
              <div
                className={`flex-shrink-0 w-14 h-14 ${reasons[4].color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {reasons[4].icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-zinc-900 uppercase mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reasons[4].title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {reasons[4].description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinCayana;
