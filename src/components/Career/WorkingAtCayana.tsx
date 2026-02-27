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
    <section className="py-20 bg-gradient-to-b from-white to-zinc-50/50 relative overflow-hidden">
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/20 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-100/20 rounded-full blur-[100px] opacity-60" />
      </div>

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
            className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-900 uppercase mb-2"
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
            className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6 shadow-[0_2px_10px_rgba(37,99,235,0.1)]"
          />

          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl font-medium text-zinc-900 uppercase mb-6"
          >
            Where Professionals Grow
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed"
          >
            Cayana fosters a workplace built on{" "}
            <span className="font-semibold text-zinc-900">trust</span>,{" "}
            <span className="font-semibold text-zinc-900">collaboration</span>, and{" "}
            <span className="font-semibold text-zinc-900">accountability</span>. Every role carries responsibility, every contribution creates impact, and every individual is empowered to progress.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 1)",
                transition: { duration: 0.3, ease: "easeOut" as any },
              }}
              className="group p-8 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div
                className={`w-14 h-14 ${pillar.color} rounded-[1.25rem] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-medium text-zinc-900 uppercase mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed font-light text-[15px] group-hover:text-zinc-700 transition-colors duration-300">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingAtCayana;
