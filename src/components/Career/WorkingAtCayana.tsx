"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Users, Award, TrendingUp, Heart } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Ownership",
    description:
      "We encourage initiative and value people who take responsibility for outcomes.",
    color: "bg-blue-50",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Collaboration",
    description:
      "Our strength lies in teamwork, shared knowledge, and mutual respect.",
    color: "bg-indigo-50",
  },
  {
    icon: <Award className="w-6 h-6 text-amber-600" />,
    title: "Excellence",
    description:
      "We uphold high standards in everything we deliver, from projects to professional conduct.",
    color: "bg-amber-50",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    title: "Progress",
    description:
      "As we grow as an organization, we ensure our people grow with us.",
    color: "bg-emerald-50",
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-600" />,
    title: "Employee Engagement",
    description:
      "We promote a balanced work culture through team outings, sports activities, and festive celebrations that strengthen connection and team spirit.",
    color: "bg-rose-50",
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

const WorkingAtCayana = () => {
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
            Empowerment & Culture
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-zinc-900 uppercase mb-4 text-center px-4"
          >
            Working at{" "}
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed"
          >
            Cayana fosters a workplace built on <span className="font-semibold text-zinc-900">trust</span>, <span className="font-semibold text-zinc-900">collaboration</span>, and <span className="font-semibold text-zinc-900">accountability</span>. Every role carries responsibility, every contribution creates impact, and every individual is empowered to progress.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-center"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                x: 10,
                backgroundColor: "rgba(249, 250, 251, 1)",
                transition: { duration: 0.3 },
              }}
              className={`group p-4 sm:p-6 md:p-8 bg-zinc-50 border border-zinc-100 rounded-2xl sm:rounded-3xl transition-all duration-300 flex flex-col md:flex-row items-start gap-4 md:gap-6 shadow-sm hover:shadow-md ${
                index === 4 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 ${pillar.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                {pillar.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-zinc-900 uppercase mb-1 sm:mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300 break-words">
                  {pillar.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed overflow-hidden">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingAtCayana;
